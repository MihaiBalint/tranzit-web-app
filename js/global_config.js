
/*
The dollar ($) library is not available at this point.
*/
var _IN_DEVELOPMENT = true;

function isInDevelopment() {
    return _IN_DEVELOPMENT;
}

function isInProduction() {
    return ! _IN_DEVELOPMENT;
}

function loadDollarLibrary(document) {
    // IE Browser compat. taken from http://zeptojs.com/
    var dollar = ('__proto__' in {} ? 'zepto' : 'jquery');
    if(isInProduction()) {
        dollar += '.min';
    }
    document.write('<script src=js/'+ dollar +'.js><\/script>');
}
