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
console.log(computeKWh(1, "aws",))
// console.log(estimationConstants.aws.unknown.emissionsFactor)

function estimateCO2(kilowattHours, provider, region) { //Emissions factor is metric tonne per kWh
    region = region || "unknown";
    return (kilowattHours * (estimationConstants[provider][region].emissionsFactor));
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
    gigabyteHours * this.coefficient * powerUsageEffectiveness * replicationFactor
}