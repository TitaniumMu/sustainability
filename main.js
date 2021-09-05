function gid(id) {
    return document.getElementById(id);
}

function toggleVisibility(id) {
    if(gid(id).style.display == 'block'){
        gid(id).style.display = 'none';
    }else{
        gid(id).style.display = 'block';
    }
}

function showBlurb() {
    console.log("Blurb shown")
}