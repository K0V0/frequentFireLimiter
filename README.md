frequentFireLimit
=================

frequentFireLimit is small jQuery plugin that should avoid to fire some event to run too often.

As example of usage is app with searchfield which content is submitted to server during user typing, it is not necessary to do the request after each letter written, to save load and bandwidth It is better to wait small amount of time when user stops/pause typing and then do the request.

Example
-------

```javascript
$('some_element').on('input', 'selector', function(e) {
  	// do the ajax request
});
```
will be transformed into (2nd parameter is time in miliseconds):
```javascript
$('some_element').frequentFireLimit('input', 350, 'selector', function(e) {
	// do the ajax request
});
```

Try it out
----------

[Go to JSFiddle](https://jsfiddle.net/76qvbL2c/14/)