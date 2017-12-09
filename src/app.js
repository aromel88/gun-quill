const { createServer } = require('http');
const Gun = require('gun');

// Create HTTP Server
const web = createServer((req, res) => res.end("Hello World"));
web.listen(process.env.PORT || 8080);

const gun = new Gun({
  web,
  verify: {
    check: () => {
      console.log("Peer connected!");
      return true;
    }
  }
});
