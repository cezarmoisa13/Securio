//declarare tab-uri
tabs = {};
//da alert cu titlul site-ului
//v1
/*chrome.tabs.getSelected(null, function(tab) { 
    alert(tab.title);
})
//v2
/*chrome.tabs.getSelected(null,function(tab) { // null defaults to current window
    var title = tab.title;
  
    el1 = document.getElementById('showurl');
    el1.innerHTML = title;
    alert(title);
   });*/
//v3
/*
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    //tabs[0].url;     //url
    tabs[0].title;   //title
    alert(tabs[0]);
});*/
//functie care da remove la un tab
function closetab(){
    /*chrome.tabs.query({ active: true }, function(tabs) {  
        chrome.tabs.remove(tabs[0].id);
    });*/
    console.log("cf");
}
//deschide link
/*chrome.browserAction.onClicked.addListener(function(Tab)
{
    var unirest = require("unirest");

    var req = unirest("GET", "https://google-search1.p.rapidapi.com/google-search");

    var titlul_articolului = "Selly";

    req.query({
        "q": titlul_articolului,
        "hl": "en",
        "gl": "us"
    });

    req.headers({
        "x-rapidapi-key": "079d1415dcmshe8b9f870c6a6c09p122c50jsn637d8a00c4b2",
        "x-rapidapi-host": "google-search1.p.rapidapi.com",
        "useQueryString": true
    });


    req.end(function (res) {
        if (res.error) throw new Error(res.error);

        console.log(res.body);
    });
});*/
/*chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({'url': chrome.extension.getURL('popup.html')}, function(tab) {
        //tab opened
    });
});*/