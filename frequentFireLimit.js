(function($) {
	$.fn.frequentFireLimit = function (event_type, delay, selector, callback) {

		return this.each(function() {

			var timed_object;
			$(this).on(event_type, selector, function(e) {
				var totok = this;
				clearTimeout(timed_object);
				timed_object = setTimeout(function() { $(totok).frequentFireLimit_handler(callback, e); }, delay);
			});			
		});
	}

	$.fn.frequentFireLimit_handler = function (h, evt) { h.call(this, evt); }
}(jQuery));