# jquery.cookie-consent

A simple jQuery plugin for requesting consent for cookie usage.

[![Build Status](https://travis-ci.org/myspace-nu/jquery.cookie-consent.svg?branch=master)](https://travis-ci.org/myspace-nu/jquery.cookie-consent)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/myspace-nu/jquery.cookie-consent/blob/master/LICENSE)

## Live demo

See a live demo on [CodePen](https://codepen.io/myspace-nu/full/LMYLzb)

## Installation

Using npm

	npm install jquery.cookie-consent --save

Using CDN

	<script src="https://cdn.jsdelivr.net/npm/jquery.cookie-consent/dist/jquery.cookie-consent.min.js"></script>

Or manually by including the script *after* the jQuery library

	<script src="/path/to/jquery.cookie-consent.min.js"></script>

## Usage

Create a consent request (displayed as a bar at the top of the page) - Bare minimum

	<script type="text/javascript">
		$(document).ready(function() {
			$.cookieConsent();
		});
	</script>

Or, create a consent request from your own markup

	<script type="text/javascript">
		$(document).ready(function() {
			$('#cookieConsent').cookieConsent();
		});
	</script>
	
	<style type="text/css">
		#cookieConsent{ background-color:white;text-align:center;display:none;position:fixed;z-index:65000;bottom:0px;width:100%;font-size:14px; }
		#cookieConsent button.cookieAccept{ background:#090;color:white;border:none;border-radius:0.2em;margin:0.5em;padding:0.2em 0.5em 0.2em 0.5em;}
	</style>
	<div id="cookieConsent">Vi använder cookies. Om du fortsätter använda vår webbplats innebär det att du godkänner detta.<button class="cookieAccept">Jag förstår</button></div>
	
Or, specify some of the available options

	<script type="text/javascript">
		$(document).ready(function() {
			$('#cookieConsent').cookieConsent({
				message: 'This website uses cookies. By using this website you consent to our use of these cookies.'
			});
		});
	</script>

## Options
**message** - The consent message you want to show

    message: 'This website uses cookies. By using this website you consent to our use of these cookies.'
	
**style** - Optional style for the consent message

    style: 'color:green;'

**consentMessage** - The text shown on the consent button

	consentMessage: 'I understand'
   
**consentStyle** - Optional style for the consent button

    consentStyle: 'font-weight:bold;'
	
**acceptClass** - Class name assigned to the consent button

    acceptClass: 'cookieAccept'

*Default: cookieAccept*

**consentTime** - Consent time in days (hides the consent request for this long)

    consentTime: 365 // Hide it for 1 year

**storage** - Where should we save the consent information?

    storage: "local" // cookie => cookie, local => localStorage, session => sessionStorate (not really useful...)

*Default: cookie*

**onInit** - Function called on init

    onInit: function(){ alert('Ready to go'); }

**onConsent** - Function called when consent is given

    onConsent: function(){ alert('Thank you!'); }

**testing** - Always show the consent request (for testing)

    testing: true

*Default: false*

### Author: [Johan Johansson](https://github.com/myspace-nu)
