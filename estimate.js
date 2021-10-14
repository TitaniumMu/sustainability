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
        "minWatts": 0.71,
        "maxWatts": 4.26,
        "memoryCoefficient": 0.000392,
        "networkingCoefficient": 0.001,
        "SSDCoefficient": 1.2,
        "HDDCoefficient": 0.65,

        "unknown": {
            "powerUsageEffectiveness": 1.1,
            "emissionsFactor": 0.0004074
        }
    },
    "gcp": {
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
            "emissionsFactor": 0.0004116296296
        }
    }
}
var demoData = {'compute': [2, "test"], 'memory': [5, "test"], 'netorking': [7, "test"], 'storage': [3, "SSD"]};
// console.log(computeKWh(1, "aws",))
// console.log(memoryKWh(2, "aws"))
// console.log(storageKWh(2, "HDD", "aws", "test"))
// console.log(networkingKWh(2, "aws"))
// console.log(estimationConstants.aws.memoryCoefficient)

console.log(calculate("aws", demoData))
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
    var PUE = estimationConstants[provider][region].powerUsageEffectiveness;
    replicationFactor = (isNaN(estimationConstants[provider].replicationFactor) ? 1 : estimationConstants[provider].replicationFactor);

    return ((minWatts + (CPU / 100) * (maxWatts - minWatts)) * vCPUHours * PUE * replicationFactor / 1000)
}

function memoryKWh(gigabyteHours, provider, region) {
    region = region || "unknown";
    var PUE = estimationConstants[provider][region].powerUsageEffectiveness;
    var replicationFactor = (isNaN(estimationConstants[provider].replicationFactor) ? 1 : estimationConstants[provider].replicationFactor);
    var coefficient = estimationConstants[provider]['memoryCoefficient'];

    return(gigabyteHours * coefficient * PUE * replicationFactor)
}

function networkingKWh(gigabytes, provider, region) {
    region = region || "unknown";
    var PUE = estimationConstants[provider][region].powerUsageEffectiveness;
    var coefficient = estimationConstants[provider].networkingCoefficient;

    return (gigabytes * coefficient * PUE);
}

function storageKWh(gigabyteHours, driveType, provider, region) {//Formula uses TerabyteHours, make sure to convert!!
    region = region || "unknown";
    var terabyteHours = gigabyteHours / 1000;
    var PUE = estimationConstants[provider][region].powerUsageEffectiveness;
    var replicationFactor = (isNaN(estimationConstants[provider].replicationFactor) ? 1 : estimationConstants[provider].replicationFactor);
    var coefficient = estimationConstants[provider][driveType + "Coefficient"];
    // return (coefficient);
    return ((terabyteHours * coefficient * PUE * replicationFactor) / 1000);
}
