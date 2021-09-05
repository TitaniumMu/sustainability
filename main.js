function gid(id) {
    return document.getElementById(id);
}

function toggleProviders() {
    if(gid('provider-options').style.display == 'block'){
        gid('provider-options').style.display = 'none';
    }else{
        gid('provider-options').style.display = 'block';
    }
}