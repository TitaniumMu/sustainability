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
        "regions": {         
            "unknown": {
                "name": "Unknown",
                "powerUsageEffectiveness": 1.135,
                "emissionsFactor": 0.00038738
            },
            "us-east-1": {
                "name": "us-east-1",
                "emissionsFactor": 0.000415755
            },
            "us-east-2": {
                "name": "us-east-2",
                "emissionsFactor": 0.000440187
            },
            "us-west-1": {
                "name": "us-west-1",
                "emissionsFactor": 0.000350861
            },
            "us-west-2": {
                "name": "us-west-2",
                "emissionsFactor": 0.000350861
            },
            "af-south-1": {
                "name": "af-south-1",
                "emissionsFactor": 0.000928
            },
            "ap-east-1": {
                "name": "ap-east-1",
                "emissionsFactor": 0.00081
            },
            "ap-south-1": {
                "name": "ap-south-1",
                "emissionsFactor": 0.000708
            },
            "ap-northeast-3": {
                "name": "ap-northeast-3",
                "emissionsFactor": 0.000506
            },
            "ap-northeast-2": {
                "name": "ap-northeast-2",
                "emissionsFactor": 0.0005
            },
            "ap-southeast-1": {
                "name": "ap-southeast-1",
                "emissionsFactor": 0.0004085
            },
            "ap-southeast-2": {
                "name": "ap-southeast-2",
                "emissionsFactor": 0.00079
            },
            "ap-northeast-1": {
                "name": "ap-northeast-1",
                "emissionsFactor": 0.000506
            },
            "ca-central-1": {
                "name": "ca-central-1",
                "emissionsFactor": 0.00013
            },
            "cn-north-1": {
                "name": "cn-north-1",
                "emissionsFactor": 0.000555
            },
            "cn-northwest-1": {
                "name": "cn-northwest-1",
                "emissionsFactor": 0.000555
            },
            "eu-central-1": {
                "name": "eu-central-1",
                "emissionsFactor": 0.000338
            },
            "eu-west-1": {
                "name": "eu-west-1",
                "emissionsFactor": 0.000316
            },
            "eu-west-2": {
                "name": "eu-west-2",
                "emissionsFactor": 0.000228
            },
            "eu-south-1": {
                "name": "eu-south-1",
                "emissionsFactor": 0.000233
            },
            "eu-west-3": {
                "name": "eu-west-3",
                "emissionsFactor": 0.000052
            },
            "eu-north-1": {
                "name": "eu-north-1",
                "emissionsFactor": 0.000008
            },
            "me-south-1": {
                "name": "me-south-1",
                "emissionsFactor": 0.000732
            },
            "sa-east-1": {
                "name": "sa-east-1",
                "emissionsFactor": 0.000074
            },
            "us-gov-east-1": {
                "name": "us-gov-east-1",
                "emissionsFactor": 0.000415755
            },
            "us-gov-west-1": {
                "name": "us-gov-west-1",
                "emissionsFactor": 0.000350861
            }
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
        "regions": {         
            "unknown": {
                "name": "Unknown",
                "powerUsageEffectiveness": 1.135,
                "emissionsFactor": 0.00038738
            },
            "apeast": {
                "name": "apeast",
                "emissionsFactor": 0.00081
            },
            "apsoutheast": {
                "name": "apsoutheast",
                "emissionsFactor": 0.0004085
            },
            "asia": {
                "name": "asia",
                "emissionsFactor": 0.0005647
            },
            /*"eastasia": {
                "name": "eastasia",
                "emissionsFactor":
            },
            "southeastasia": {
                "name": "southeastasia",
                "emissionsFactor":
            },
            "USNorth": {
                "name": "USNorth",
                "emissionsFactor":
            },*///these 3 are listed in Azure regions, but not under emissions factors
            "northeurope": {
                "name": "northeurope",
                "emissionsFactor": 0.000316
            },
            "westeurope": {
                "name": "westeurope",
                "emissionsFactor": 0.00039
            },
            "centralindia": {
                "name": "centralindia",
                "emissionsFactor": 0.000708
            },
            "southindia": {
                "name": "southindia",
                "emissionsFactor": 0.000708
            },
            "westindia": {
                "name": "westindia",
                "emissionsFactor": 0.000708
            },
            "ukwest": {
                "name": "ukwest",
                "emissionsFactor": 0.000228
            },
            "uksouth": {
                "name": "uksouth",
                "emissionsFactor": 0.000228
            },
            "CentralUS": {
                "name": "CentralUS",
                "emissionsFactor": 0.00047223
            },
            "EastUS": {
                "name": "EastUS",
                "emissionsFactor": 0.000415755
            },
            "EastUS2": {
                "name": "EastUS2",
                "emissionsFactor": 0.000415755
            },
            "EastUS3": {
                "name": "EastUS3",
                "emissionsFactor": 0.000415755
            },
            "NorthCentralUs": {
                "name": "NorthCentralUs",
                "emissionsFactor": 0.000440187
            },
            "SouthCentralUS": {
                "name": "SouthCentralUS",
                "emissionsFactor": 0.000396293
            },
            "WestCentralUS": {
                "name": "WestCentralUS",
                "emissionsFactor": 0.000350861
            },

            "WestUS": {
                "name": "WestUS",
                "emissionsFactor": 0.000350861
            },
            "westus2": {
                "name": "westus2",
                "emissionsFactor": 0.000350861
            },
            "westus3": {
                "name": "westus3",
                "emissionsFactor": 0.000350861
            }

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
                "name": "Unknown",
                "powerUsageEffectiveness": 1.1,
                "emissionsFactor": 0.0004116296296 //Metric tons CO2e per kWh
            },
            "asia-east1": {
                "name": "asia-east1 (Taiwan)",
                "powerUsageEffectiveness": 1.13,
                "emissionsFactor": 0.00054
            },
            "asia-east2": {
                "name": "asia-east2 (Hong kong)",
                "emissionsFactor": 0.000453
            },
            "asia-northeast1": {
                "name": "asia-northeast1 (Tokyo)",
                "emissionsFactor": 0.000554
            },
            "asia-northeast2": {
                "name": "asia-northeast2 (Osaka)",
                "emissionsFactor": 0.000442
            },
            "asia-northeast3": {
                "name": "asia-northeast3 (Seoul)",
                "emissionsFactor": 0.000457
            },
            "asia-south1": {
                "name": "asia-south1 (Mumbai)",
                "emissionsFactor": 0.000721
            },
            "asia-south2": {
                "name": "asia-south2 (Delhi)",
                "emissionsFactor": 0.000657
            },
            "asia-southeast1": {
                "name": "asia-southeast1 (Singapore)",
                "powerUsageEffectiveness": 1.14,
                "emissionsFactor": 0.000493
            },
            "asia-southeast2": {
                "name": "asia-southeast2 (Jakarta)",
                "emissionsFactor": 0.000647
            },
            "australia-southeast1": {
                "name": "australia-southeast1 (Sydney)",
                "emissionsFactor": 0.000727
            },
            "australia-southeast2": {
                "name": "australia-southeast2 (Melbourne)",
                "emissionsFactor": 0.000691
            },
            "europe-central2": {
                "name": "europe-central2 (Warsaw)",
                "emissionsFactor": 0.000622
            },
            "europe-north1": {
                "name": "europe-north1 (Finland)",
                "powerUsageEffectiveness": 1.09,
                "emissionsFactor": 0.000133
            },
            "europe-west1": {
                "name": "europe-west1 (Belgium)",
                "powerUsageEffectiveness": 1.08,
                "emissionsFactor": 0.000212
            },
            "europe-west2": {
                "name": "europe-west2 (London)",
                "emissionsFactor": 0.000231
            },
            "europe-west3": {
                "name": "europe-west3 (Frankfurt)",
                "emissionsFactor": 0.000293
            },
            "europe-west4": {
                "name": "europe-west4 (Netherlands)",
                "powerUsageEffectiveness": 1.09,
                "emissionsFactor": 0.00041
            },
            "europe-west6": {
                "name": "europe-west6 (Zurich)",
                "emissionsFactor": 0.000087
            },
            "northamerica-northeast1": {
                "name": "northamerica-northeast1 (Montréal)",
                "emissionsFactor": 0.000027
            },
            "southamerica-east1": {
                "name": "southamerica-east1 (São Paolo)",
                "powerUsageEffectiveness": 1.09,
                "emissionsFactor": 0.000103
            },
            "us-central1": {
                "name": "us-central1 (Iowa)",
                "powerUsageEffectiveness": 1.11,
                "emissionsFactor": 0.000454
            },
            "us-east1": {
                "name": "us-east1 (South Carolina)",
                "powerUsageEffectiveness": 1.102,
                "emissionsFactor": 0.00048
            },
            "us-east4": {
                "name": "us-east4 (North Virginia)",
                "emissionsFactor": 0.000361
            },
            "us-west1": {
                "name": "us-west1 (Oregon)",
                "powerUsageEffectiveness": 1.095,
                "emissionsFactor": 0.000078
            },
            "us-west2": {
                "name": "us-west2 West (Los Angeles)",
                "emissionsFactor": 0.000253
            },
            "us-west3": {
                "name": "us-west3 (Salt Lake City)",
                "emissionsFactor": 0.000533
            },
            "us-west4": {
                "name": "us-west4 (Las Vegas)",
                "emissionsFactor": 0.000455
            },
            "us-multi": {
                "name": "us-multi (Multiple Regions)",
                "emissionsFactor": 0.0003734285714
            },
            "europe-multi": {
                "name": "europe-multi (Multiple Regions)",
                "emissionsFactor": 0.000284
            },
            "asia-multi": {
                "name": "asia-multi (Multiple Regions)",
                "emissionsFactor": 0.0005515555556
            },
            "asia-dual": {
                "name": "asia-dual (Dual Regions)",
                "emissionsFactor": 0.000498
            },
            "europe-dual": {
                "name": "europe-dual (Dual Regions)",
                "emissionsFactor": 0.0002715
            },
            "northamerica-dual": {
                "name": "nam4 / North America (Dual Regions)",
                "emissionsFactor": 0.000467
            }
        }
    }
}

// console.log(rankRegions())
function rankRegions() {

    var regionEmissionsFactors = [];
    var aws = estimationConstants.aws.regions;
    var azure = estimationConstants.azure.regions;
    var gcp = estimationConstants.gcp.regions;

    for(var i=0;i<Object.keys(aws).length;i++) {
        regionEmissionsFactors.push({"name": 'aws-'+Object.keys(aws)[i], "emissionsFactor": aws[Object.keys(aws)[i]].emissionsFactor})
    }
    for(var i=0;i<Object.keys(azure).length;i++) {
        regionEmissionsFactors.push({"name": 'azure-'+Object.keys(azure)[i], "emissionsFactor": azure[Object.keys(azure)[i]].emissionsFactor})
    }
    for(var i=0;i<Object.keys(gcp).length;i++) {
        regionEmissionsFactors.push({"name": 'gcp-'+Object.keys(gcp)[i], "emissionsFactor": gcp[Object.keys(gcp)[i]].emissionsFactor})
    }

    regionEmissionsFactors.sort(function(a, b) {return(a.emissionsFactor - b.emissionsFactor)})
    // console.log(regionEmissionsFactors[Object.keys(regionEmissionsFactors)[0]].name + ": " + regionEmissionsFactors[Object.keys(regionEmissionsFactors)[0]].emissionsFactor)
    // console.log(regionEmissionsFactors[Object.keys(regionEmissionsFactors)[33]].name + ": " + regionEmissionsFactors[Object.keys(regionEmissionsFactors)[33]].emissionsFactor)
// console.log(regionEmissionsFactors)
    var str = "";
    for(var i=0; i<regionEmissionsFactors.length; i++){
        str += (regionEmissionsFactors[i]['emissionsFactor'] * 1000 + " ")
    }

    return str;
    return regionEmissionsFactors;
}

function calculate(data) { //Format data like so: {'compute': [vCPUHours, provider, region, consider?], 'memory': [gigabyetHours, provider, region, consider?]}

    var computeKWh = 0;
    var computeCO2 = 0;
    if(data.compute[3]) {
        var computeKWh = estimateComputeKWh(data.compute[0], data.compute[1], data.compute[2])
        var computeCO2 = estimateCO2(computeKWh, data.compute[1], data.compute[2]);
    }
    
    var memoryKWh = 0;
    var memoryCO2 = 0;
    if(data.compute[3]) {
        var memoryKWh = estimateMemoryKWh(data.memory[0], data.memory[1], data.memory[2]);
        var memoryCO2 = estimateCO2(memoryKWh, data.memory[1], data.memory[2]);
    }

    var storageKWh = 0;
    var storageCO2 = 0;
    if(data.storage[4]) {
        var storageKWh = estimateStorageKWh(data.storage[0], data.storage[1], data.storage[2], data.storage[3]);
        var storageCO2 = estimateCO2(storageKWh, data.storage[2], data.storage[3]);
    }

    var networkingKWh = 0;
    var networkingCO2 = 0;
    if(data.networking[3]) {
        var networkingKWh = estimateNetworkingKWh(data.networking[0], data.networking[1], data.networking[2]);
        var networkingCO2 = estimateCO2(networkingKWh, data.networking[1], data.networking[2]);
    }


    var totalKWh = computeKWh + memoryKWh + storageKWh + networkingKWh;

    var totalCO2 = computeCO2 + memoryCO2 + storageCO2 + networkingCO2;

    console.log("compute: " + Math.floor(10000*computeKWh/totalKWh)/100 + "% of total KWh" + ",   " + Math.floor(10000*computeCO2/totalCO2)/100 + "% of total CO2")
    console.log("memory: " + Math.floor(10000*memoryKWh/totalKWh)/100 + "% of total KWh" + ",   " + Math.floor(10000*memoryCO2/totalCO2)/100 + "% of total CO2")
    console.log("storage: " + Math.floor(10000*storageKWh/totalKWh)/100 + "% of total KWh" + ",   " + Math.floor(10000*storageCO2/totalCO2)/100 + "% of total CO2")
    console.log("networking: " + Math.floor(10000*networkingKWh/totalKWh)/100 + "% of total KWh" + ",   " + Math.floor(10000*networkingCO2/totalCO2)/100 + "% of total CO2")


    return(totalCO2); //returns metric tonnes
}

function estimateCO2(kilowattHours, provider, region) { //Emissions factor is metric tonnes per kWh
    region = region || "unknown";
    var emissionsFactor = estimationConstants[provider].regions[region].emissionsFactor;
    
    return (kilowattHours * emissionsFactor);
}

function estimateComputeKWh(vCPUHours, provider, region) {
    region = region || "unknown";
    var minWatts = estimationConstants[provider].minWatts;
    var maxWatts = estimationConstants[provider].maxWatts;
    var CPU = estimationConstants[provider].CpuUtilization;
    var PUE = (estimationConstants[provider].regions[region].powerUsageEffectiveness ? estimationConstants[provider].regions[region].powerUsageEffectiveness : estimationConstants[provider].regions.unknown.powerUsageEffectiveness);
    replicationFactor = (isNaN(estimationConstants[provider].replicationFactor) ? 1 : estimationConstants[provider].replicationFactor);

    return ((minWatts + (CPU / 100) * (maxWatts - minWatts)) * vCPUHours * PUE * replicationFactor / 1000)
}

function estimateMemoryKWh(gigabyteHours, provider, region) {
    region = region || "unknown";
    var PUE = estimationConstants[provider].regions[region].powerUsageEffectiveness || estimationConstants[provider].regions.unknown.powerUsageEffectiveness;
    var replicationFactor = (isNaN(estimationConstants[provider].replicationFactor) ? 1 : estimationConstants[provider].replicationFactor);
    var coefficient = estimationConstants[provider]['memoryCoefficient'];

    return(gigabyteHours * coefficient * PUE * replicationFactor)
}

function estimateStorageKWh(gigabyteHours, driveType, provider, region) {
    region = region || "unknown";
    var terabyteHours = gigabyteHours / 1000;
    var PUE = estimationConstants[provider].regions[region].powerUsageEffectiveness || estimationConstants[provider].regions.unknown.powerUsageEffectiveness;
    var replicationFactor = (isNaN(estimationConstants[provider].replicationFactor) ? 1 : estimationConstants[provider].replicationFactor);
    var coefficient = estimationConstants[provider][driveType + "Coefficient"];

    return ((terabyteHours * coefficient * PUE * replicationFactor) / 1000);
}

function estimateNetworkingKWh(gigabytes, provider, region) {
    region = region || "unknown";
    var PUE = estimationConstants[provider].regions[region].powerUsageEffectiveness || estimationConstants[provider].regions.unknown.powerUsageEffectiveness;
    var coefficient = estimationConstants[provider].networkingCoefficient;

    return (gigabytes * coefficient * PUE);
}