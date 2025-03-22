const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // Đọc file index.html
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Lỗi server!");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
