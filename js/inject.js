(function() {
    var buttons = document.getElementsByClassName("btn btn-primary btn-block download-button");
    console.log(buttons)
    var ids=[];
    var servers=[];
    var types=[];
    for (var i = 0; i < buttons.length; i++){
        ids.push(buttons[i].dataset.id);
        servers.push(buttons[i].dataset.server)
        types.push(buttons[i].dataset.type)
    }
    console.log(ids)
    console.log(servers)
    console.log(types)
    var param = {
        ids : ids,
        servers: servers,
        types: types
    };
    chrome.runtime.sendMessage(param)
})();