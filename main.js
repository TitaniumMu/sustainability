function gid(id) {
    return document.getElementById(id);
}

function toggleVisibility(id) {
    id = id.split(',');
    for(var i=0;i<id.length;i++) {
        if(gid(id[i]).style.display == 'block'){
            gid(id[i]).style.display = 'none';
        }else{
            gid(id[i]).style.display = 'block';
        }
    }
}

function showBlurb() {
    console.log("Blurb shown")
}