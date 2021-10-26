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

function toggleNavbar() {
    if(gid('nav-bar').classList.contains('mini')) {
        gid('nav-bar').classList.remove('mini');
        gid('content').classList.remove('wide');
    }else{
        gid('nav-bar').classList.add('mini');
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

function checkVisible(box, info) {
    console.log(box.checked)
}

function fillRandomData() {
    gid('compute-box')
}

function showFootprint(data) {
    var tonnesCO2 = calculate(data);
    var kgCO2 = tonnesCO2 * 1000

    gid('emissions').innerHTML = "Your calculated emissions are " + kgCO2 + "Kg CO2e";
    gid('emissions').style.display = "block"
}