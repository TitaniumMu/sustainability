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

function ChangeProviderSelect(toHide, val, provider) {
    var hideClass = document.querySelectorAll(toHide);
    for(var i=0;i<hideClass.length;i++) {
        hideClass[i].style.display = 'none';
    }
    if(gid(val)) { gid(val).style.display = 'block'; }
}

function fillRegionSelect(provider, selectid) {
    // console.log(estimationConstants[provider].regions[Object.keys(estimationConstants[provider].regions)[4]].name)
    for(var i=0;i<Object.keys(estimationConstants[provider].regions).length;i++){
        var newOption = document.createElement("option");
        newOption.value = Object.keys(estimationConstants[provider].regions)[i];
        newOption.text = estimationConstants[provider].regions[Object.keys(estimationConstants[provider].regions)[i]].name;
        gid(selectid).appendChild(newOption);
    }
    // console.log(options)
}