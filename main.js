function gid(id) {
    return document.getElementById(id);
}

function toggleVisibility(id) { //Probably obselete
    id = id.split(',');
    for(var i=0;i<id.length;i++) {
        if(gid(id[i]).style.display == 'block'){
            gid(id[i]).style.display = 'none';
        }else{
            gid(id[i]).style.display = 'block';
        }
    }
}

// function toggleNavbar() {
//     if(gid('nav-bar').classList.contains('mini')) {
//         gid('nav-bar').classList.remove('mini');
//         gid('content').classList.remove('wide');
//     }else{
//         gid('nav-bar').classList.add('mini');
//         gid('content').classList.add('wide');
//     }
// }

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

function checkVisible(box, info) { //both inputs are already elements
    if(box.checked) {
        info.style.display = 'block';
        scrollBottom()
    } else {
        info.style.display = 'none';
    }
}

function fillRandomData() {

    function getRandProv() {
        num = Math.random();
        if(num < .33){return('aws')}
        if(num < .66){return('azure')}
        return('gcp')
    }

    function getRandRegion(provider) {
        var regions = estimationConstants[provider].regions;
        return(Object.keys(regions)[Math.floor(Math.random() * Object.keys(regions).length)]);
    }

    gid('compute-box').checked = (Math.random() < .9 ? true : false);
    gid('compute-info').style.display = (gid('compute-box').checked ? 'block' : 'none');
    gid('compute-provider').value = getRandProv();
    fillRegionSelect(gid('compute-provider').value, 'compute-region')
    gid('compute-region').value = getRandRegion(gid('compute-provider').value)
    gid('vCPUHours').value = Math.random() * Math.random() * 100
    gid('memory-gigabyteHours').value = Math.random() * Math.random() * 100

    gid('storage-box').checked = (Math.random() < .9 ? true : false);
    gid('storage-info').style.display = (gid('storage-box').checked ? 'block' : 'none');
    gid('storage-provider').value = getRandProv();
    fillRegionSelect(gid('storage-provider').value, 'storage-region')
    gid('storage-region').value = getRandRegion(gid('storage-provider').value)
    gid('drive-type').value = (Math.random()<.5 ? 'HDD' : 'SSD')
    gid('storage-gigabyteHours').value = Math.random() * Math.random() * 100

    gid('networking-box').checked = (Math.random() < .9 ? true : false);
    gid('networking-info').style.display = (gid('networking-box').checked ? 'block' : 'none');
    gid('networking-provider').value = getRandProv();
    fillRegionSelect(gid('networking-provider').value, 'networking-region')
    gid('networking-region').value = getRandRegion(gid('networking-provider').value)
    gid('networking-gigabytes').value = Math.random() * Math.random() * 100

}

function showFootprint(data) {
    var tonnesCO2 = calculate(data);
    var kgCO2 = tonnesCO2 * 1000

    gid('emissions').innerHTML = "Your calculated emissions are " + kgCO2 + "Kg CO2e";
    gid('emissions').style.display = "block"
}

function scrollBottom() {
    window.scrollTo({top: document.documentElement.scrollHeight, behavior: "smooth"});
}
