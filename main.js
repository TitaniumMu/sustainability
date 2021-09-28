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

function toggleSidebar() {
    if(gid('sidebar').classList.contains('mini')) {
        gid('sidebar').classList.remove('mini');
        gid('content').classList.remove('wide');
    }else{
        gid('sidebar').classList.add('mini');
        gid('content').classList.add('wide');
    }
}

function ChangeSelect(toHide, val) {
    var hideClass = document.querySelectorAll(toHide);
    for(var i=0;i<hideClass.length;i++) {
        hideClass[i].style.display = 'none';
    }
    gid(val).style.display = 'block';
}