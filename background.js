/* global chrome: true */
'use strict';

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
	if (changeInfo.status !== 'loading') return;

	chrome.tabs.executeScript(tabId, {
		file: 'app.js',
		runAt: 'document_end'
	},
	function(res) {
		if (chrome.runtime.lastError || res[0]) return;

		chrome.tabs.insertCSS(tabId, {
			file: 'env.css',
			runAt: 'document_end'
		});
	});
});
