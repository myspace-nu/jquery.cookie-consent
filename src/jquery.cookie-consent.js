/*!
 * jQuery Cookie consent plugin 0.9.1
 * https://github.com/myspace-nu
 *
 * Copyright 2017 Johan Johansson
 * Released under the MIT license
 */
(function($) {
	$.cookie = function (key, value, options) {
		if (arguments.length > 1){
			options = $.extend({}, options);
			if (value === null || value === undefined) {
				options.expires = -1;
			}
			return (document.cookie = [
				encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '',
				options.path ? '; path=' + options.path : '',
				options.domain ? '; domain=' + options.domain : '',
				options.secure ? '; secure' : ''
			].join(''));
		}
		var pairs = document.cookie.split('; ');
		for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
			if (decodeURIComponent(pair[0]) === key) return decodeURIComponent(pair[1] || '');
		}
		return null;
	};
	$.fn.cookieConsent = function(options) {
		var settings = $.extend({
			position: "static",
		  	message: "This website uses cookies. By using this website you consent to our use of these cookies.",
		  	style: "",
		  	consentMessage: "I understand",
		  	consentStyle: "",
		  	acceptClass: "cookieAccept",
		  	consentTime: 3650, // 10 years
		  	storage: "cookie",
		  	onInit: function(){ },
			onConsent: function(){ },
		  	onTemplate: function(){ console.log(this) },
		  	testing: false
		}, options);
		var language = window.navigator.userLanguage || window.navigator.language;
		settings.storage =
		  	(settings.storage==='local'&&typeof(Storage)!=="undefined")?'local':
	  		(settings.storage==='session'&&typeof(Storage)!=="undefined")?'session':
			'cookie';
		var consentedDate =
			(settings.storage==='local')?parseInt(localStorage.getItem("cookiesConsentDate")):
			(settings.storage==='session')?parseInt(sessionStorage.getItem("cookiesConsentDate")):
			parseInt($.cookie('cookiesConsentDate'));
		var elm =
			(this.length)?
				this:
				$("<div>", { html:settings.message, style:"background-color:white;color:#333;text-align:center;display:none;"+settings.style })
				.append($("<button>",{
					html:settings.consentMessage,
					style:"background:#090;color:white;border:none;border-radius:0.2em;margin:0.5em;padding:0.2em 0.5em 0.2em 0.5em;"+settings.consentStyle,
		  			class:settings.acceptClass}))
				.prependTo($("body"));
	  	settings.onInit.call(elm);
		if(settings.testing || !consentedDate || consentedDate+(86400000*settings.consentTime) < new Date().getTime()){
		  	$(elm).show();
		} else {
	  	  	$(elm).hide(); // Make sure to hide it if defined style does not do this.
		}
		elm.each(function() {
			var thisElm = $(this);
			$(this).prependTo($("body"));
			$(this).find("."+settings.acceptClass).click(function() {
				if(settings.storage==='local'){
					localStorage.setItem("cookiesConsentDate", new Date().getTime());
				} else if(settings.storage==='session') {
					sessionStorage.setItem("cookiesConsentDate", new Date().getTime());
				} else {
					$.cookie('cookiesConsentDate',new Date().getTime(),
						{ expires: new Date(new Date().getTime()+(86400000*settings.consentTime))}
					);
				}
				thisElm.slideUp();
			  	settings.onConsent.call(thisElm);
			});
		});
		return this;
	};
	$.cookieConsent = function(options) {
		$.fn.cookieConsent(options);
	};
}(jQuery));