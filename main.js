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

function fillRegionSelect(provider, selectid) {
    selectid = gid(selectid);
    while(selectid.firstChild) {//Clears all options
        selectid.firstChild.remove();
    }
    if(provider == 'none'){
        var newOption = document.createElement("option");
        newOption.text = 'Please select a provider';
        selectid.appendChild(newOption);
    } else {
        for(var i=0;i<Object.keys(estimationConstants[provider].regions).length;i++){//Populates new options
            var newOption = document.createElement("option");
            newOption.value = Object.keys(estimationConstants[provider].regions)[i];
            newOption.text = estimationConstants[provider].regions[Object.keys(estimationConstants[provider].regions)[i]].name;
            selectid.appendChild(newOption);
        }
    }
}