// ==UserScript==
// @name        PornHub TV
// @author      itsmidnightyo
// @version     1.0.0
// @license     GPL-3.0+; http://www.gnu.org/licenses/gpl-3.0.txt
// @description enables the pornhub tv layout as seen on PS4. [custom css edits have also been applied]
// @match       http://*.pornhub.com/*
// @match       https://*.pornhub.com/*
// @require     http://code.jquery.com/jquery-latest.js
// @require     https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @require     http://cdnjs.cloudflare.com/ajax/libs/sugar/1.3/sugar.min.js
// @require     https://ci.phncdn.com/www-static/js/tv/player.js?cache=2017122020
// @require     https://ci.phncdn.com/www-static/js/tv/main.js?cache=2017122020
// @grant       none
// @run-at      document-start
// @namespace   https://github.com/itsmidnightyo
// ==/UserScript==

Cookies.remove('platform');

Cookies.set('platform', 'tv', { domain: '.pornhub.com' } , { path: '/' } , { expires: 365 });
Cookies.get('platform');

    var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
	if (confirm('click ok to reload lol')) {
    	window.location.replace("https://www.pornhub.com");
	} else {
    	window.location.replace("https://google.com");
	}
     localStorage.setItem('alerted','yes');
    }