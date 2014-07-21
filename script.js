var target = 'http://pr0stats.github.io/';
var url = document.URL.split('/');
var query = url.splice(4, (url.length-1));

target = target + query.join('/');
window.location.href = target;
