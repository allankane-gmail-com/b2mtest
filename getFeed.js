// getFeed module - retrieves all the feeds in the array urls
// outputs them to the screen with the response object
// closes the response object when done
var feed = require("feed-read");
var feedsDone = 0;


function getFeed(res, urls, numItems) {
	//loop around our list of urls	
	for(var countFeeds = 0; countFeeds < urls.length; countFeeds++){
		feed(urls[countFeeds], onComplete) 
			
	}
	// callback function to write out the feeds and close the response object when complete
	function onComplete(err, newsItems){
		feedsDone++;
		if(err){
			console.log(err.message)
		}
		else {
			// loop around to get 10 items
			for(var counter = 0; counter < 10; counter++) {				
				res.write("<div><a title=\"" + newsItems[counter].title + "\" href=\""+ newsItems[counter].link + "\">" + newsItems[counter].title + "</a></div>");																	
			}
		}
																	
		if (feedsDone == urls.length){
			res.end("</body></html>");
		}
	}			
	
}



// export getFeed as a module
exports.getFeed = getFeed;
