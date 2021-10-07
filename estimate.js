const estimationConstants = {
    "aws": {
        "avg": {
            "powerUsageEffectiveness": 1.135,
            "replicationFactor": {},
            "CpuUtilization": 50,
            "minWatts": 0.74,
            "maxWatts": 3.5,
            "memoryCoefficient": 0.000392,
            "networkingCoefficient": 0.001,
            "SSDCoefficient": 1.2,
            "HDDCoefficient": 0.65
        }
    },
    "azure": {
        "avg": {
            "powerUsageEffectiveness": 1.1,
            "replicationFactor": {},
            "CpuUtilization": 50,
            "minWatts": 0.71,
            "maxWatts": 4.26,
            "memoryCoefficient": 0.000392,
            "networkingCoefficient": 0.001,
            "SSDCoefficient": 1.2,
            "HDDCoefficient": 0.65
        }
    },
    "gcp": {
        "avg": {
            "powerUsageEffectiveness": 1.185,
            "replicationFactor": {},
            "CpuUtilization": 50,
            "minWatts": 0.78,
            "maxWatts": 3.76,
            "memoryCoefficient": 0.000392,
            "networkingCoefficient": 0.001,
            "SSDCoefficient": 1.2,
            "HDDCoefficient": 0.65
        }
    }
}

function estimateCO2(wattHours, region, emissionsFactors) {
    
}