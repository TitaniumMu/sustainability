const estimationConstants = {
    "aws": {
        "replicationFactor": {},
        "CpuUtilization": 50,
        "minWatts": 0.74,
        "maxWatts": 3.5,
        "memoryCoefficient": 0.000392,
        "networkingCoefficient": 0.001,
        "SSDCoefficient": 1.2,
        "HDDCoefficient": 0.65,

        "unknown": {
            "powerUsageEffectiveness": 1.135,
            "emissionsFactor": 0.00038738
        },
        "test": {
            "powerUsageEffectiveness": 34,
            "emissionsFactor": 0.2
        }
    },
    "azure": {
        "replicationFactor": {},
        "CpuUtilization": 50,
        "minWatts": 0.78,
        "maxWatts": 3.76,
        "memoryCoefficient": 0.000392,
        "networkingCoefficient": 0.001,
        "SSDCoefficient": 1.2,
        "HDDCoefficient": 0.65,

        "unknown": {
            "powerUsageEffectiveness": 1.185,
            "emissionsFactor": 0.0004074
        }
    },
    "gcp": {
        "replicationFactor": {},
        "CpuUtilization": 50,
        "minWatts": 0.71,
        "maxWatts": 4.26,
        "memoryCoefficient": 0.000392,  //kWh/Gb
        "networkingCoefficient": 0.001, //kWh/Gb
        "SSDCoefficient": 1.2, //watt hours / terabyte hour
        "HDDCoefficient": 0.65, //watt hours / terabyte hour
        "regions": {            
            "unknown": {
                "name": "unknown",
                "powerUsageEffectiveness": 1.1,
                "emissionsFactor": 0.0004116296296 //Metric tons CO2e per kWh
            },
            "asia-east1": {
                "name": "asia-east1 (Taiwan)",
                "powerUsageEffectiveness": 1.13
            },
            "asia-east2": {
                "name": "asia-east2 (Hong kong)"
            },
            "asia-northeast1": {
                "name": "asia-northeast1 (Tokyo)"
            },
            "asia-northeast2": {
                "name": "asia-northeast2 (Osaka)"
            },
            "asia-northeast3": {
                "name": "asia-northeast3 (Seoul)"
            },
            "asia-south1": {
                "name": "asia-south1 (Mumbai)"
            },
            "asia-south2": {
                "name": "asia-south2 (Delhi)"
            },
            "asia-southeast1": {
                "name": "asia-southeast1 (Singapore)",
                "powerUsageEffectiveness": 1.14
            },
            "asia-southeast2": {
                "name": "asia-southeast2 (Jakarta)"
            },
            "australia-southeast1": {
                "name": "australia-southeast1 (Sydney)"
            },
            "australia-southeast2": {
                "name": "australia-southeast2 (Melbourne)"
            },
            "europe-central2": {
                "name": "europe-central2 (Warsaw)"
            },
            "europe-north1": {
                "name": "europe-north1 (Finland)",
                "powerUsageEffectiveness": 1.09
            },
            "europe-west1": {
                "name": "europe-west1 (Belgium)",
                "powerUsageEffectiveness": 1.08
            },
            "europe-west2": {
                "name": "europe-west2 (London)"
            },
            "europe-west3": {
                "name": "europe-west3 (Frankfurt)"
            },
            "europe-west4": {
                "name": "europe-west4 (Netherlands)",
                "powerUsageEffectiveness": 1.09
            },
            "europe-west6": {
                "name": "europe-west6 (Zurich)"
            },
            "northamerica-northeast1": {
                "name": "northamerica-northeast1 America (Montréal)"
            },
            "southamerica-east1": {
                "name": "southamerica-east1 America (São Paolo)",
                "powerUsageEffectiveness": 1.09
            },
            "us-central1": {
                "name": "us-central1 (Iowa)",
                "powerUsageEffectiveness": 1.11
            },
            "us-east1": {
                "name": "us-east1 (South Carolina)",
                "powerUsageEffectiveness": 1.102
            },
            "us-east4": {
                "name": "us-east4 (North Virginia)"
            },
            "us-west1": {
                "name": "us-west1 (Oregon)",
                "powerUsageEffectiveness": 1.095
            },
            "us-west2": {
                "name": "us-west2 West (Los Angeles)"
            },
            "us-west3": {
                "name": "us-west3 (Salt Lake City)"
            },
            "us-west4": {
                "name": "us-west4 (Las Vegas)"
            },
            "us-multi": {
                "name": "us-multi (Multiple Regions)"
            },
            "europe-multi": {
                "name": "europe-multi (Multiple Regions)"
            },
            "asia-multi": {
                "name": "asia-multi (Multiple Regions)"
            },
            "asia-dual": {
                "name": "asia-dual (Dual Regions)"
            },
            "europe-dual": {
                "name": "europe-dual (Dual Regions)"
            },
            "northamerica-dual": {
                "name": "nam4 / North America (Dual Regions)"
            }
        }
    }
}//REMEMBER TO REFORMAT FUNCTIONS SO THAT REGIONS ARE NESTED ONE FURTHER IN THE OBJECT!!!

function makeRegions(object){//temporary function to reformat a string
    var keys = Object.keys(object);
    for(var i=0;i<keys.length;i++){
        var loc = keys[i];
        var city = object[loc].name.split(" ")[1] + (object[loc].name.split(" ")[2] ? " "+object[loc].name.split(" ")[2] : "") + (object[loc].name.split(" ")[3] ? " "+object[loc].name.split(" ")[3] : "") + (object[loc].name.split(" ")[4] ? " "+object[loc].name.split(" ")[4] : "");
        object[loc].name = loc + " " +city;
    }
    return object;
}
// console.log(makeRegions(estimationConstants.gcp.regions))
// console.log(makeRegions(regionsss))
var demoData = {'compute': [2, "test"], 'memory': [5, "test"], 'netorking': [7, "test"], 'storage': [3, "SSD"]};
// console.log(computeKWh(1, "aws",))
// console.log(memoryKWh(2, "aws"))
// console.log(storageKWh(2, "HDD", "aws", "test"))
// console.log(networkingKWh(2, "aws"))
// console.log(estimationConstants.aws.memoryCoefficient)

// console.log(calculate("aws", demoData))
// console.log(estimateCO2(computeKWh(2, "aws", "test"), "aws"))
// console.log(estimationConstants.aws.test.emissionsFactor)
function calculate(provider, data) {  //Format data like so: {'compute': [vCPUHours, region], 'memory': [gigabyetHours, region]}
    return(
        (data.compute ? estimateCO2(computeKWh(data.compute[0], provider, data.compute[1]), provider, data.compute[1]) : 0) +//Estimate functions need region/provider as well
        (data.memory ? estimateCO2(memoryKWh(data.memory[0], provider, data.memory[1]), provider, data.memory[1]) : 0) +
        (data.networking ? estimateCO2(networkingKWh(data.networking[0], provider, data.networking[1]), provider, data.networking[1]) : 0) +
        (data.storage ? estimateCO2(storageKWh(data.storage[0], data.storage[1], provider, data.storage[2]), provider, data.storage[1]) : 0)
        )
}

function estimateCO2(kilowattHours, provider, region) { //Emissions factor is metric tonne per kWh
    region = region || "unknown";
    var emissionsFactor = estimationConstants[provider].regions[region].emissionsFactor;
    return (kilowattHours * emissionsFactor);
}

function computeKWh(vCPUHours, provider, region) {
    region = region || "unknown";
    var minWatts = estimationConstants[provider].minWatts;
    var maxWatts = estimationConstants[provider].maxWatts;
    var CPU = estimationConstants[provider].CpuUtilization;
    var PUE = estimationConstants[provider].regions[region].powerUsageEffectiveness || estimationConstants[provider].unknown.powerUsageEffectiveness;
    replicationFactor = (isNaN(estimationConstants[provider].replicationFactor) ? 1 : estimationConstants[provider].replicationFactor);

    return ((minWatts + (CPU / 100) * (maxWatts - minWatts)) * vCPUHours * PUE * replicationFactor / 1000)
}

function memoryKWh(gigabyteHours, provider, region) {
    region = region || "unknown";
    var PUE = estimationConstants[provider].regions[region].powerUsageEffectiveness || estimationConstants[provider].unknown.powerUsageEffectiveness;
    var replicationFactor = (isNaN(estimationConstants[provider].replicationFactor) ? 1 : estimationConstants[provider].replicationFactor);
    var coefficient = estimationConstants[provider]['memoryCoefficient'];

    return(gigabyteHours * coefficient * PUE * replicationFactor)
}

function networkingKWh(gigabytes, provider, region) {
    region = region || "unknown";
    var PUE = estimationConstants[provider].regions[region].powerUsageEffectiveness || estimationConstants[provider].unknown.powerUsageEffectiveness;
    var coefficient = estimationConstants[provider].networkingCoefficient;

    return (gigabytes * coefficient * PUE);
}

function storageKWh(gigabyteHours, driveType, provider, region) {//Formula uses TerabyteHours, make sure to convert!!
    region = region || "unknown";
    var terabyteHours = gigabyteHours / 1000;
    var PUE = estimationConstants[provider].regions[region].powerUsageEffectiveness || estimationConstants[provider].unknown.powerUsageEffectiveness;
    var replicationFactor = (isNaN(estimationConstants[provider].replicationFactor) ? 1 : estimationConstants[provider].replicationFactor);
    var coefficient = estimationConstants[provider][driveType + "Coefficient"];
    // return (coefficient);
    return ((terabyteHours * coefficient * PUE * replicationFactor) / 1000);
}
