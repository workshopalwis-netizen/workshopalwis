require 'socket'
require 'uri'

port = ARGV[0] ? ARGV[0].to_i : 8080
server = TCPServer.new('127.0.0.1', port)
puts "======================================================="
puts "  DHANANJAYA PORTFOLIO SERVER RUNNING"
puts "  URL: http://localhost:#{port}/index.html"
puts "======================================================="

MIME_TYPES = {
  '.html' => 'text/html; charset=utf-8',
  '.css'  => 'text/css; charset=utf-8',
  '.js'   => 'application/javascript; charset=utf-8',
  '.svg'  => 'image/svg+xml',
  '.png'  => 'image/png',
  '.jpg'  => 'image/jpeg',
  '.json' => 'application/json'
}

loop do
  Thread.start(server.accept) do |client|
    request_line = client.gets
    if request_line
      path = request_line.split(" ")[1] || "/"
      path = "/index.html" if path == "/"
      clean_path = File.join(Dir.pwd, URI.decode_www_form_component(path).sub(%r{^/+}, ''))

      if File.file?(clean_path)
        ext = File.extname(clean_path).downcase
        content_type = MIME_TYPES[ext] || 'application/octet-stream'
        content = File.read(clean_path)

        client.print "HTTP/1.1 200 OK\r\n"
        client.print "Content-Type: #{content_type}\r\n"
        client.print "Content-Length: #{content.bytesize}\r\n"
        client.print "Connection: close\r\n\r\n"
        client.print content
      else
        client.print "HTTP/1.1 404 Not Found\r\n\r\n404 Not Found"
      end
    end
    client.close
  end
end
