var http = require("http");
var getFeed = require("./getFeed");
var feed = require("feed-read");
var items = 10;
var urls = ["http://feeds.bbci.co.uk/news/rss.xml", "http://news.sky.com/feeds/rss/home.xml"]

// create the server start function
function serverStart() {
	function onRequest(req, res) {
		// write out a basic html page
		res.writeHead(200, {"Content-Type": "text/html", "Transfer-Encoding": "chunked"});
		res.write("<html>");
		res.write("<head>");
		res.write("<title>B2M Technical Test</title>");
		res.write("</head>");
		res.write("<body>");	

		//go get the rss feeds
		getFeed.getFeed(res, urls, items);
		
	}

	

	http.createServer(onRequest).listen(8880);
	console.log("Server started.");
}


 
// export the server as a module
exports.serverStart = serverStart;
