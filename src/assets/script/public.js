
export const refresh = title => {
    document.title = title;
    let  iframe = document.createElement('iframe');
    iframe.src = require('../imgs/gh.svg');
    iframe.setAttribute('style','display:none');
    let loadFn = function(){
        iframe.removeEventListener('load',loadFn);
        document.body.removeChild(iframe);
        iframe = null;
        loadFn = null;
    }
    document.body.appendChild(iframe);
    iframe.addEventListener('load',loadFn); 
}
