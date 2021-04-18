chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.query({ active: true }, function(tabs) {  
		chrome.tabs.remove(tabs[0].id);   
	}); 
	chrome.tabs.create({
		index: 1,
		url: 'https://www.capital.ro/cati-bani-incaseaza-selly-lunar-din-youtube-vloggerul-a-spus-adevarul-e-o-mandrie-pentru-mine.html'
	});
	chrome.tabs.create({
		index: 2,
		url: 'https://www.libertatea.ro/entertainment/selly-a-spus-cati-bani-face-pe-luna-din-youtube-3487452'
	});
	chrome.tabs.create({
		index: 3,
		url: 'https://playtech.ro/stiri/cati-bani-a-luat-cel-mai-mult-selly-din-youtube-suma-este-uriasa-pentru-doar-30-de-zile-309149'
	});
	chrome.tabs.create({
		index: 4,
		url: 'https://adevarul.ro/entertainment/tv/selly-vorbit-despre-castigalunar-youtube-brandul-l-am-construit-valoreaza-unmilion-euro-1_606d88665163ec4271b42a4d/index.html'
	});
});