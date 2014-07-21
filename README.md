pr0stats - forward repository for pr0stats.github.io
====================================================

This is the former project gh-pages repository of pr0stats (which was accessable via http://pr0stats.github.io/pr0stats).
We moved the repository to pr0stats/pr0stats.github.io in order to make the project available at http://pr0stats.github.io.

The current purpose of *this* repository is to provide callability for old links

    http://pr0stats.github.io/pr0stats/analysen/11-tagcloud-juli3.html

and forward them to the new url.

    http://pr0stats.github.io/analysen/11-tagcloud-juli3.html

We simply realized this by statically creating HTML files for all old documents. Then a small JS snippet does the forwarding:

    var target = 'http://pr0stats.github.io/';
    var url = document.URL.split('/');
    var query = url.splice(4, (url.length-1));
    
    target = target + query.join('/');
    window.location.href = target;
