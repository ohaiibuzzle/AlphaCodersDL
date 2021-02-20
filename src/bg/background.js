// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender)
    const dwl_server = "https://initiate.alphacoders.com/download/wallpaper/"
    var ids=request.ids;
    var servers=request.servers;
    var types=request.types;
  	for (var i = 0; i < ids.length; i++) {
      var downloadLink = dwl_server +
       ids[i] + "/" +
       servers[i] + "/" +
       types[i];
      chrome.downloads.download({
        url: downloadLink,
        filename: ids[i] + "." + types[i]
      });
    }
    sendResponse();
  });

chrome.browserAction.onClicked.addListener(function(tab) 
{
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    let link = tabs[0].url
    // alert(link)
    if (!link.match("/wall.alphacoders.com/")) {alert("Invilid Link");return;}

    chrome.tabs.executeScript(tab.ib, {
      file: 'js/inject.js'
    });
  }
  )
});
