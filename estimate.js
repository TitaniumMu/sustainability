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
        "memoryCoefficient": 0.000392,
        "networkingCoefficient": 0.001,
        "SSDCoefficient": 1.2,
        "HDDCoefficient": 0.65,
        "regions": {
            "unknown": {
                "name": "Unknown",
                "powerUsageEffectiveness": 1.1,
                "emissionsFactor": 0.0004116296296
            },
            "asia-east1":{
                "name": "Asia (Taiwan)",
                "powerUsageEffectiveness": 1.13,
            },
            "asia-east2": {
                "name": "Asia (Hong kong)"
            },
            "asia-northeast1": {
                "name": "Asia (Tokyo)"
            },
            "asia-northeast2": {
                "name": "Asia (Osaka)"
            },
            "asia-northeast3": {
                "name": "Asia (Seoul)"
            },
            "asia-south1": {
                "name": "Asia (Mumbai)"
            },
            "asia-south2": {
                "name": "Asia (Delhi)"
            },
            "asia-southeast1": {
                "name": "Asia (Singapore)",
                "powerUsageEffectiveness": 1.14,
            },
            "asia-southeast2": {
                "name": "Asia (Jakarta)"
            },
            "australia-southeast1": {
                "name": "Australia (Sydney)"
            },
            "australia-southeast2": {
                "name": "Australia (Melbourne)"
            },
            "europe-central2": {
                "name": "Europe (Warsaw)"
            },
            "europe-north1": {
                "name": "Europe (Finland)",
                "powerUsageEffectiveness": 1.09,
            },
            "europe-west1": {
                "name": "Europe (Belgium)",
                "powerUsageEffectiveness": 1.08,
            },
            "europe-west2": {
                "name": "Europe (London)"
            },
            "europe-west3": {
                "name": "Europe (Frankfurt)"
            },
            "europe-west4": {
                "name": "Europe (Netherlands)",
                "powerUsageEffectiveness": 1.09,
            },
            "europe-west6": {
                "name": "Europe (Zurich)"
            },
            "northamerica-northeast1": {
                "name": "North America (Montréal)"
            },
            "southamerica-east1": {
                "name": "South America (São Paolo)",
                "powerUsageEffectiveness": 1.09,
            },
            "us-central1": {
                "name": "US (Iowa)",
                "powerUsageEffectiveness": 1.11,

            },
            "us-east1": {
                "name": "US (South Carolina)",
                "powerUsageEffectiveness": 1.102,
            },
            "us-east4": {
                "name": "US (North Virginia)"
            },
            "us-west1": {
                "name": "US (Oregon)",
                "powerUsageEffectiveness": 1.095,
            },
            "us-west2": {
                "name": "US West (Los Angeles)"
            },
            "us-west3": {
                "name": "US (Salt Lake City)"
            },
            "us-west4": {
                "name": "US (Las Vegas)"
            },
            "us-multi": {
                "name": "US (Multiple Regions)"
            },
            "europe-multi": {
                "name": "Europe (Multiple Regions)"
            },
            "asia-multi": {
                "name": "Asia (Multiple Regions)"
            },
            "asia-dual": {
                "name": "Asia (Dual Regions)"
            },
            "europe-dual": {
                "name": "Europe (Dual Regions)"
            },
            "northamerica-dual": {
                "name": "Nam4 / North America (Dual Regions)"
            }
        }
    }
}//REMEMBER TO REFORMAT FUNCTIONS SO THAT REGIONS ARE NESTED ONE FURTHER IN THE OBJECT!!!

function makeRegions(string){//temporary function to reformat a string
    var arr1 = string.split(',');
    var obj = ""
    for(var i=0;i<arr1.length;i+=2){
        obj +=(
                "$"+arr1[i] + "$: {\n   $name$: $" + arr1[i+1]+"$\n},\n"
        )
    }
    return obj;
        
}
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
    var emissionsFactor = estimationConstants[provider][region].emissionsFactor;
    return (kilowattHours * emissionsFactor);
}

function computeKWh(vCPUHours, provider, region) {
    region = region || "unknown";
    var minWatts = estimationConstants[provider].minWatts;
    var maxWatts = estimationConstants[provider].maxWatts;
    var CPU = estimationConstants[provider].CpuUtilization;
    var PUE = estimationConstants[provider][region].powerUsageEffectiveness || estimationConstants[provider].unknown.powerUsageEffectiveness;
    replicationFactor = (isNaN(estimationConstants[provider].replicationFactor) ? 1 : estimationConstants[provider].replicationFactor);

    return ((minWatts + (CPU / 100) * (maxWatts - minWatts)) * vCPUHours * PUE * replicationFactor / 1000)
}

function memoryKWh(gigabyteHours, provider, region) {
    region = region || "unknown";
    var PUE = estimationConstants[provider][region].powerUsageEffectiveness || estimationConstants[provider].unknown.powerUsageEffectiveness;
    var replicationFactor = (isNaN(estimationConstants[provider].replicationFactor) ? 1 : estimationConstants[provider].replicationFactor);
    var coefficient = estimationConstants[provider]['memoryCoefficient'];

    return(gigabyteHours * coefficient * PUE * replicationFactor)
}

function networkingKWh(gigabytes, provider, region) {
    region = region || "unknown";
    var PUE = estimationConstants[provider][region].powerUsageEffectiveness || estimationConstants[provider].unknown.powerUsageEffectiveness;
    var coefficient = estimationConstants[provider].networkingCoefficient;

    return (gigabytes * coefficient * PUE);
}

function storageKWh(gigabyteHours, driveType, provider, region) {//Formula uses TerabyteHours, make sure to convert!!
    region = region || "unknown";
    var terabyteHours = gigabyteHours / 1000;
    var PUE = estimationConstants[provider][region].powerUsageEffectiveness || estimationConstants[provider].unknown.powerUsageEffectiveness;
    var replicationFactor = (isNaN(estimationConstants[provider].replicationFactor) ? 1 : estimationConstants[provider].replicationFactor);
    var coefficient = estimationConstants[provider][driveType + "Coefficient"];
    // return (coefficient);
    return ((terabyteHours * coefficient * PUE * replicationFactor) / 1000);
}
