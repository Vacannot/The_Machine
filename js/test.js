/**
 * constant containing the element with the id "story" which is used to display text
 */
const textElement = document.getElementById('story')
    /**
     * constant containing the elements with the id "option-buttons" which the user uses to navigate the story
     */
const optionButtonsElement = document.getElementById('option-buttons')


/**
 * Contains values for each ore with corresponding getters & setters
 * and also values for whether or not they've been unlocked or not.
 */

const storage = {

    // Unlocked states, setters & getters
    unlockedOnceIron: false,
    unlockedOnceSteel: false,
    unlockedOnceTitanium: false,
    unlockedOnceDiamond: false,
    unlockedOnceGem: false,

    set setUnlockedIron(value) {
        this.unlockedOnceIron = value
    },
    get getUnlockedIron() {
        return this.unlockedOnceIron
    },
    set setUnlockedSteel(value) {
        this.unlockedOnceSteel = value
    },
    get getUnlockedSteel() {
        return this.unlockedOnceSteel
    },
    set setUnlockedTitanium(value) {
        this.unlockedOnceTitanium = value
    },
    get getUnlockedTitanium() {
        return this.unlockedOnceTitanium
    },
    set setUnlockedDiamond(value) {
        this.unlockedOnceDiamond = value
    },
    get getUnlockedDiamond() {
        return this.unlockedOnceDiamond
    },
    set setUnlockedGem(value) {
        this.unlockedOnceGem = value
    },
    get getUnlockedGem() {
        return this.unlockedOnceGem
    },

    // Default values for each ore
    coalCount: 0,
    coalCost: 10,
    coalLevel: 0,
    coalDelay: 1000,

    ironCount: 0,
    ironCost: 10,
    ironLevel: 0,
    ironDelay: 1000,

    steelCount: 0,
    steelCost: 10,
    steelLevel: 0,
    steelDelay: 1000,

    titaniumCount: 0,
    titaniumCost: 10,
    titaniumLevel: 0,
    titaniumDelay: 1000,

    diamondCount: 0,
    diamondCost: 10,
    diamondLevel: 0,
    diamondDelay: 1000,

    // Setters & Getters for each ore
    // Coal Setters & Getters
    set setCoal(value) {
        this.coalCount = value
    },
    get getCoal() {
        return this.coalCount
    },
    set setCoalCost(value) {
        this.coalCost = value
    },
    get getCoalCost() {
        return this.coalCost
    },
    set setCoalLevel(value) {
        this.coalLevel = value
    },
    get getCoalLevel() {
        return this.coalLevel
    },
    set setCoalDelay(value) {
        this.coalDelay = value
    },
    get getCoalDelay() {
        return this.coalDelay
    },
    // Iron Setters & Getters
    set setIron(value) {
        this.ironCount = value
    },
    get getIron() {
        return this.ironCount
    },
    set setIronCost(value) {
        this.ironCost = value
    },
    get getIronCost() {
        return this.ironCost
    },
    set setIronLevel(value) {
        this.ironLevel = value
    },
    get getIronLevel() {
        return this.ironLevel
    },
    set setIronDelay(value) {
        this.ironDelay = value
    },
    get getIronDelay() {
        return this.ironDelay
    },
    // Steel Setters & Getters
    set setSteel(value) {
        this.steelCount = value
    },
    get getSteel() {
        return this.steelCount
    },
    set setSteelCost(value) {
        this.steelCost = value
    },
    get getSteelCost() {
        return this.steelCost
    },
    set setSteelLevel(value) {
        this.steelLevel = value
    },
    get getSteelLevel() {
        return this.steelLevel
    },
    set setSteelDelay(value) {
        this.steelDelay = value
    },
    get getSteelDelay() {
        return this.steelDelay
    },
    // Titanium Setters & Getters
    set setTitanium(value) {
        this.titaniumCount = value
    },
    get getTitanium() {
        return this.titaniumCount
    },
    set setTitaniumCost(value) {
        this.titaniumCost = value
    },
    get getTitaniumCost() {
        return this.titaniumCost
    },
    set setTitaniumLevel(value) {
        this.titaniumLevel = value
    },
    get getTitaniumLevel() {
        return this.titaniumLevel
    },
    set setTitaniumDelay(value) {
        this.titaniumDelay = value
    },
    get getTitaniumDelay() {
        return this.titaniumDelay
    },
    // Diamond Setters & Getters
    set setDiamond(value) {
        this.diamondCount = value
    },
    get getDiamond() {
        return this.diamondCount
    },
    set setDiamondCost(value) {
        this.diamondCost = value
    },
    get getDiamondCost() {
        return this.diamondCost
    },
    set setDiamondLevel(value) {
        this.diamondLevel = value
    },
    get getDiamondLevel() {
        return this.diamondLevel
    },
    set setDiamondDelay(value) {
        this.diamondDelay = value
    },
    get getDiamondDelay() {
        return this.diamondDelay
    },
    // Gem Setters & Getters
    set setGem(value) {
        this.gemCount = value
    },
    get getGem() {
        return this.gemCount
    },

}

/** 
 * Reloads the page when requested to reset the game if the player died
 */
function reset() {

    location.reload()

}
/**  
 * Adds a delay / sleep equally long to the miliseconds alloted to it
 * @param  {} ms miliseconds
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * Starts the game, starts the story from the first node and starts the countdown timer also adds a EventListeniner to
 * the cogwheel / id="password" element and enterPassword element / button to look if the user clicks them.
 */
function startGame() {
    showTextNode(1)
    countdownTimer()
    document.getElementById("input").addEventListener("click", input)

    document.getElementById("enterPassword").addEventListener("click", password)
}
/**
 * Rounds numbers upwards so they don't have any decimals
 * 
 * @param  {} number Takes any number
 */
function round(number) {
    return Number.parseFloat(number).toFixed(0)
}
/**
 * 
 * Unlocks the button to continue the story if it is locked
 */
function unlockStoryButton() {
    document.getElementById("storyButton").disabled = false
}
/**
 * Creates a countdown that's 10 hours long for the user to complete the game.
 */
function countdownTimer() {
    const countTime = new Date()
    let time = countTime.getTime()
    time = time + 36000000


    // Run myfunc every second
    setInterval(function() {

        let now = new Date().getTime();
        let timeleft = time - now;

        // Calculating the days, hours, minutes and seconds left
        let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        // Result is output to the specific element
        document.getElementById("hours").innerHTML = hours + "h "
        document.getElementById("mins").innerHTML = minutes + "m "
        document.getElementById("secs").innerHTML = seconds + "s "


        // Display the message when countdown is over
        if (timeleft < 0) {

            document.getElementById("hours").innerHTML = ""
            document.getElementById("mins").innerHTML = ""
            document.getElementById("secs").innerHTML = ""

            document.getElementById("timeout").innerHTML = "You're out of time."
            location.reload();
        }
    }, 1000);
}


// Coal logic
/**
 * Sets the level of the coal ore to 1 and sets the time on how long it takes to generate
 * a coal depending on the level of the ore. Generates coal using addCoal()
 */
async function coal() {

    let coalLevel = 1
    let coalTimer = 1

    while (coalLevel >= 1) {

        coalLevel = storage.getCoalLevel
        coalTimer = storage.getCoalDelay

        coalTimer = coalTimer * (0.9 ** coalLevel)

        addCoal()
        await sleep(coalTimer)
    }
}
/**
 * Upgrades the ore, updates the numbers on the screen using displayCoalCost() & displayCoal()
 * Levels up the ore once and increases the price for upgrading it again and removes what it cost to upgrade
 * it from the current amount of owned ore. If the user can't afford an upgrade it displays an alert with that information.
 * 
 */
function upgradeCoal() {

    let currentCoal = storage.getCoal
    let currentCost = storage.getCoalCost
    let currentLevel = storage.getCoalLevel

    if (currentCoal >= currentCost) {
        currentLevel = currentLevel + 1
        currentCoal = currentCoal - currentCost
        currentCost = currentCost * 1.5

        storage.setCoal = currentCoal
        storage.setCoalCost = currentCost
        storage.setCoalLevel = currentLevel

        displayCoalCost()
        displayCoal()
    } else {
        alert("You don't have enough coal to afford this upgrade")
    }
}
/**
 *  Adds ore the the total amount of ore and updates the game with displayCoal(), also checks if the user
 *  has managed to store a total of 100 ore to unlock the next relevant ore.
 */
function addCoal() {

    let coalCurrent = storage.getCoal
    coalCurrent = coalCurrent + 1
    storage.setCoal = coalCurrent
    displayCoal()

    let first = storage.getUnlockedIron

    if (storage.getCoal >= 100 && first == false) {
        unlockStoryButton()
        storage.setUnlockedIron = true
    }
}
/**
 * Updates what's shown on screen with the current amount of relevant ore
 */
function displayCoal() {
    let coalElement = document.getElementById("coalSumText")
    coalElement.innerText = "Amount: " + round(storage.getCoal)
}
/**
 * Updates what's shown on screen with the current cost of this ore
 */
function displayCoalCost() {
    let coalElement = document.getElementById("coalCostText")
    coalElement.innerText = "Cost: " + (round(storage.getCoalCost)) + " Coal"
}
/**
 * Unlocks relevant ore if criterias are met and also hides text on screen with the criterias
 */
function unlockCoal() {

    let coalLevel = storage.getCoalLevel
    if (coalLevel < 1) {
        coalLevel = coalLevel + 1
        storage.setCoalLevel = coalLevel
        coal()
        document.getElementById("unlockCoal").disabled = true
        document.getElementById("unlockCoalCost").classList.add("hidden")
    }
}
/**
 * Unlocks the relevant ore buttons when asked upon
 */
function unlockCoalButton() {
    document.getElementById("unlockCoal").disabled = false
    document.getElementById("upgradeCoal").disabled = false
}

// Iron logic
/**
 * Sets the level of the iron ore to 1 and sets the time on how long it takes to generate
 * a iron depending on the level of the ore. Generates iron using addIron()
 */
async function iron() {

    let ironLevel = 1
    let ironTimer = 1

    while (ironLevel >= 1) {

        ironLevel = storage.getIronLevel
        ironTimer = storage.getIronDelay

        ironTimer = ironTimer * (0.9 ** ironLevel)
        addIron()

        await sleep(ironTimer)
    }
}
/**
 * Upgrades the ore, updates the numbers on the screen using displayIronCost() & displayIron()
 * Levels up the ore once and increases the price for upgrading it again and removes what it cost to upgrade
 * it from the current amount of owned ore. If the user can't afford an upgrade it displays an alert with that information.
 * 
 */
function upgradeIron() {

    let currentIron = storage.getCoal
    let currentCost = storage.getIronCost
    let currentLevel = storage.getIronLevel

    if (currentIron >= currentCost) {
        currentLevel = currentLevel + 1
        currentIron = currentIron - currentCost
        currentCost = currentCost * 1.5

        storage.setCoal = currentIron
        storage.setIronCost = currentCost
        storage.setIronLevel = currentLevel

        displayIronCost()
        displayIron()
    } else {
        alert("You don't have enough iron to afford this upgrade")
    }
}
/**
 *  Adds ore the the total amount of ore and updates the game with displayIron(), also checks if the user
 *  has managed to store a total of 100 ore to unlock the next relevant ore.
 */
function addIron() {

    let ironCurrent = storage.getIron
    ironCurrent = ironCurrent + 1
    storage.setIron = ironCurrent
    displayIron()

    let first = storage.getUnlockedSteel

    if (storage.getIron >= 100 && first == false) {
        unlockStoryButton()
        storage.setUnlockedSteel = true
    }


}
/**
 * Updates what's shown on screen with the current amount of relevant ore
 */
function displayIron() {
    let ironElement = document.getElementById("ironSumText")
    ironElement.innerText = "Amount: " + round(storage.getIron)
}
/**
 * Updates what's shown on screen with the current cost of this ore
 */
function displayIronCost() {
    let ironElement = document.getElementById("ironCostText")
    ironElement.innerText = "Cost: " + (round(storage.getIronCost)) + " Coal"
}
/**
 * Unlocks relevant ore if criterias are met and also hides text on screen with the criterias
 */
function unlockIron() {
    let currentIron = storage.getCoal
    let ironLevel = storage.getIronLevel
    if (ironLevel < 1) {
        ironLevel = ironLevel + 1
        storage.setIronLevel = ironLevel
        currentIron = currentIron - 100
        storage.setCoal = currentIron
        iron()
        document.getElementById("unlockIron").disabled = true
        document.getElementById("unlockIronCost").classList.add("hidden")
    }
}
/**
 * Unlocks the relevant ore buttons when asked upon
 */
function unlockIronButton() {
    document.getElementById("unlockIron").disabled = false
    document.getElementById("upgradeIron").disabled = false
}

// Steel logic
/**
 * Sets the level of the steel ore to 1 and sets the time on how long it takes to generate
 * a steel depending on the level of the ore. Generates steel using addSteel()
 */
async function steel() {

    let steelLevel = 1
    let steelTimer = 1

    while (steelLevel >= 1) {

        steelLevel = storage.getSteelLevel
        steelTimer = storage.getSteelDelay

        steelTimer = steelTimer * (0.9 ** steelLevel)
        addSteel()

        await sleep(steelTimer)
    }
}
/**
 * Upgrades the ore, updates the numbers on the screen using displaySteelCost() & displaySteel()
 * Levels up the ore once and increases the price for upgrading it again and removes what it cost to upgrade
 * it from the current amount of owned ore. If the user can't afford an upgrade it displays an alert with that information.
 * 
 */
function upgradeSteel() {

    let currentSteel = storage.getIron
    let currentCost = storage.getSteelCost
    let currentLevel = storage.getSteelLevel

    if (currentSteel >= currentCost) {
        currentLevel = currentLevel + 1
        currentSteel = currentSteel - currentCost
        currentCost = currentCost * 1.5

        storage.setIron = currentSteel
        storage.setSteelCost = currentCost
        storage.setSteelLevel = currentLevel

        displaySteelCost()
        displaySteel()
    } else {
        alert("You don't have enough steel to afford this upgrade")
    }
}
/**
 *  Adds ore the the total amount of ore and updates the game with displaySteel(), also checks if the user
 *  has managed to store a total of 100 ore to unlock the next relevant ore.
 */
function addSteel() {
    let steelCurrent = storage.getSteel
    steelCurrent = steelCurrent + 1
    storage.setSteel = steelCurrent
    displaySteel()

    let first = storage.getUnlockedTitanium

    if (storage.getSteel >= 100 && first == false) {
        unlockStoryButton()
        storage.setUnlockedTitanium = true
    }


}
/**
 * Updates what's shown on screen with the current amount of relevant ore
 */
function displaySteel() {
    let steelElement = document.getElementById("steelSumText")
    steelElement.innerText = "Amount: " + round(storage.getSteel)
}
/**
 * Updates what's shown on screen with the current cost of this ore
 */
function displaySteelCost() {
    let steelElement = document.getElementById("steelCostText")
    steelElement.innerText = "Cost: " + (round(storage.getSteelCost)) + " Iron"
}
/**
 * Unlocks relevant ore if criterias are met and also hides text on screen with the criterias
 */
function unlockSteel() {

    let currentIron = storage.getIron

    let steelLevel = storage.getSteelLevel
    if (steelLevel < 1) {
        steelLevel = steelLevel + 1
        storage.setSteelLevel = steelLevel

        currentIron = currentIron - 100
        storage.setIron = currentIron

        steel()
        document.getElementById("unlockSteel").disabled = true
        document.getElementById("unlockSteelCost").classList.add("hidden")
    }
}
/**
 * Unlocks the relevant ore buttons when asked upon
 */
function unlockSteelButton() {
    document.getElementById("unlockSteel").disabled = false
    document.getElementById("upgradeSteel").disabled = false
}

// Titanium logic
/**
 * Sets the level of the titanium ore to 1 and sets the time on how long it takes to generate
 * a titanium depending on the level of the ore. Generates titanium using addTitanium()
 */
async function titanium() {

    let titaniumLevel = 1
    let titaniumTimer = 1

    while (titaniumLevel >= 1) {

        titaniumLevel = storage.getTitaniumLevel
        titaniumTimer = storage.getTitaniumDelay

        titaniumTimer = titaniumTimer * (0.9 ** titaniumLevel)
        addTitanium()

        await sleep(titaniumTimer)
    }
}
/**
 * Upgrades the ore, updates the numbers on the screen using displayTitaniumCost() & displayTitanium()
 * Levels up the ore once and increases the price for upgrading it again and removes what it cost to upgrade
 * it from the current amount of owned ore. If the user can't afford an upgrade it displays an alert with that information.
 * 
 */
function upgradeTitanium() {

    let currentTitanium = storage.getSteel
    let currentCost = storage.getTitaniumCost
    let currentLevel = storage.getTitaniumLevel

    if (currentTitanium >= currentCost) {
        currentLevel = currentLevel + 1
        currentTitanium = currentTitanium - currentCost
        currentCost = currentCost * 1.5

        storage.setSteel = currentTitanium
        storage.setTitaniumCost = currentCost
        storage.setTitaniumLevel = currentLevel

        displayTitaniumCost()
        displayTitanium()
    } else {
        alert("You don't have enough titanium to afford this upgrade")
    }
}
/**
 *  Adds ore the the total amount of ore and updates the game with displayTitanium(), also checks if the user
 *  has managed to store a total of 100 ore to unlock the next relevant ore.
 */
function addTitanium() {
    let titaniumCurrent = storage.getTitanium
    titaniumCurrent = titaniumCurrent + 1
    storage.setTitanium = titaniumCurrent
    displayTitanium()

    let first = storage.getUnlockedDiamond

    if (storage.getTitanium >= 100 && first == false) {
        unlockStoryButton()
        storage.setUnlockedDiamond = true
    }


}
/**
 * Updates what's shown on screen with the current amount of relevant ore
 */
function displayTitanium() {
    let titaniumElement = document.getElementById("titaniumSumText")
    titaniumElement.innerText = "Amount: " + round(storage.getTitanium)
}
/**
 * Updates what's shown on screen with the current cost of this ore
 */
function displayTitaniumCost() {
    let titaniumElement = document.getElementById("titaniumCostText")
    titaniumElement.innerText = "Cost: " + (round(storage.getTitaniumCost)) + " Steel"
}
/**
 * Unlocks relevant ore if criterias are met and also hides text on screen with the criterias
 */
function unlockTitanium() {
    let currentSteel = storage.getSteel
    let titaniumLevel = storage.getTitaniumLevel
    if (titaniumLevel < 1) {
        titaniumLevel = titaniumLevel + 1
        storage.setTitaniumLevel = titaniumLevel
        currentSteel = currentSteel - 100
        storage.setSteel = currentSteel
        titanium()
        document.getElementById("unlockTitanium").disabled = true
        document.getElementById("unlockTitaniumCost").classList.add("hidden")
    }
}
/**
 * Unlocks the relevant ore buttons when asked upon
 */
function unlockTitaniumButton() {
    document.getElementById("unlockTitanium").disabled = false
    document.getElementById("upgradeTitanium").disabled = false
}

// Diamond logic
/**
 * Sets the level of the diamond ore to 1 and sets the time on how long it takes to generate
 * a diamond depending on the level of the ore. Generates diamond using addDiamond()
 */
async function diamond() {

    let diamondLevel = 1
    let diamondTimer = 1

    while (diamondLevel >= 1) {

        diamondLevel = storage.getDiamondLevel
        diamondTimer = storage.getDiamondDelay

        diamondTimer = diamondTimer * (0.9 ** diamondLevel)
        addDiamond()

        await sleep(diamondTimer)
    }
}
/**
 * Upgrades the ore, updates the numbers on the screen using displayDiamondCost() & displayDiamond()
 * Levels up the ore once and increases the price for upgrading it again and removes what it cost to upgrade
 * it from the current amount of owned ore. If the user can't afford an upgrade it displays an alert with that information.
 * 
 */
function upgradeDiamond() {

    let currentDiamond = storage.getTitanium
    let currentCost = storage.getDiamondCost
    let currentLevel = storage.getDiamondLevel

    if (currentDiamond >= currentCost) {
        currentLevel = currentLevel + 1
        currentDiamond = currentDiamond - currentCost
        currentCost = currentCost * 1.5

        storage.setTitanium = currentDiamond
        storage.setDiamondCost = currentCost
        storage.setDiamondLevel = currentLevel

        displayDiamondCost()
        displayDiamond()
    } else {
        alert("You don't have enough diamond to afford this upgrade")
    }
}
/**
 *  Adds ore the the total amount of ore and updates the game with displayDiamond(), also checks if the user
 *  has managed to store a total of 100 ore to unlock the next relevant ore.
 */
function addDiamond() {
    let diamondCurrent = storage.getDiamond
    diamondCurrent = diamondCurrent + 1
    storage.setDiamond = diamondCurrent
    displayDiamond()

    let first = storage.getUnlockedGem

    if (storage.getDiamond >= 100 && first == false) {
        unlockStoryButton()
        storage.setUnlockedGem = true
    }


}
/**
 * Updates what's shown on screen with the current amount of relevant ore
 */
function displayDiamond() {
    let diamondElement = document.getElementById("diamondSumText")
    diamondElement.innerText = "Amount: " + round(storage.getDiamond)
}
/**
 * Updates what's shown on screen with the current cost of this ore
 */
function displayDiamondCost() {
    let diamondElement = document.getElementById("diamondCostText")
    diamondElement.innerText = "Cost: " + (round(storage.getDiamondCost)) + " Titanium"
}
/**
 * Unlocks relevant ore if criterias are met and also hides text on screen with the criterias
 */
function unlockDiamond() {

    let currentTitanium = storage.getTitanium

    let diamondLevel = storage.getDiamondLevel
    if (diamondLevel < 1) {
        diamondLevel = diamondLevel + 1
        storage.setDiamondLevel = diamondLevel

        currentTitanium = currentTitanium - 100
        storage.setTitanium = currentTitanium

        diamond()
        document.getElementById("unlockDiamond").disabled = true
        document.getElementById("unlockDiamondCost").classList.add("hidden")
    }
}
/**
 * Unlocks the relevant ore buttons when asked upon
 */
function unlockDiamondButton() {
    document.getElementById("unlockDiamond").disabled = false
    document.getElementById("upgradeDiamond").disabled = false
}

// Story logic
/**
 * Puts the user through different events based on where in the story the user is
 * @param  {} textNodeIndex Current nodeIndex of the story
 */
function storyEvents(textNodeIndex) {


    if (textNodeIndex == 100) {
        let nameElement = document.getElementById("name")
        nameElement.innerText = ""
    } else if (textNodeIndex == 6) {
        let playerNamePrompt = prompt("Enter your name")
        playerName = playerNamePrompt

        let nameElement = document.getElementById("name")
        nameElement.innerText = playerName
    } else if (textNodeIndex == 12) {
        unlockCoalButton()
    } else if (textNodeIndex == 13) {
        document.getElementById("storyButton").disabled = true
    } else if (textNodeIndex == 14) {
        unlockIronButton()
        document.getElementById("storyButton").disabled = true
    } else if (textNodeIndex == 15) {
        unlockSteelButton()
        document.getElementById("storyButton").disabled = true
    } else if (textNodeIndex == 16) {
        document.getElementById("storyButton").disabled = true
        unlockTitaniumButton()
    } else if (textNodeIndex == 17) {
        document.getElementById("storyButton").disabled = true
        unlockDiamondButton()
    } else {

    }
}
/**
 * Shows the text corresponding to the current place in the story
 * @param  {} textNodeIndex Current nodeIndex of the story
 */
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {

        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.setAttribute("id", "storyButton")
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
        storyEvents(textNodeIndex)

    })
}

/**
 * Selects the option the user has clicked on and passes him to the corresopnding node 
 * @param  {} option The option the user chose
 */
function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return reset()
    }
    showTextNode(nextTextNodeId)
}
/**
 * Array of the different node stages that the user can navigate through and their corresponding optional paths
 */
const textNodes = [{
        id: 1,
        text: "Goodmorning, You're finally awake.",
        options: [{
                text: "Where am i?",
                nextText: 2
            },
            {
                text: "Who are you?",
                nextText: 3
            },
            {
                text: "Stay quiet..",
                nextText: 4
            }
        ]
    }, {
        id: 2,
        text: "You're down here with me, in the mine.",
        options: [{
            text: "Continue",
            nextText: 5
        }]
    }, {
        id: 3,
        text: "I don't have a name.",
        options: [{
            text: "Continue",
            nextText: 5
        }]
    }, {
        id: 4,
        text: "GOOOODMOOORNING, HELLOOO!!!",
        options: [{
            text: "Continue",
            nextText: 5
        }]
    }, {
        id: 51,
        text: "What's your name?",
        options: [{
            text: "Continue",
            nextText: 52
        }]
    }, {
        id: 5,
        text: "What's your name?",
        options: [{
            text: "Continue",
            nextText: 6
        }]
    }, {
        id: 6,
        text: "Welcome to the deep young one, this is our home.",
        options: [{
            text: "Continue",
            nextText: 8
        }]
    }, {
        id: 52,
        text: "Oh, now you can talk? Welcome to the deep $name, this is our home.",
        options: [{
            text: "Continue",
            nextText: 8
        }]
    }, {
        id: 8,
        text: "It's been lonely down here for a while now, not much happening down here since the last one died 8̷̧̛̛͇̀̈́̔͆̓̃̍̍̌̚ͅ9̶̢͇͚̞̦̤̣͈̻͐́̊̀͌͑̆̈́͝4̸͈̻͙̈̿̌͌́̿́͐̀̚͘͘͝͝5̴̨͙͖̤̭̆̿̍̄̇̑̑9̶̡̢͍͖̠̦͇̔̑̑̐͌̚̕͠  years ago.",
        options: [{
            text: "Continue",
            nextText: 9
        }]
    }, {
        id: 9,
        text: "If you don't want to end up like the last one you better get to work.",
        options: [{
            text: "Continue",
            nextText: 10
        }]
    }, {
        id: 10,
        text: "Stop, you don't get to use any tools until you pay me.",
        options: [{
            text: "Pay the Machine with what you have.",
            nextText: 12
        }, {
            text: "Refuse to pay the machine.",
            nextText: 11
        }]
    }, {
        id: 11,
        text: "No payment, no food.",
        options: [{
            text: "You starve to death.",
            nextText: 100
        }]
    }, {
        id: 12,
        text: "Your clothes? It will have to do. Everything you need is over there. Now get started before i have you strave.",
        options: [{
            text: "Continue",
            nextText: 13
        }]
    }, {
        id: 13,
        text: "You have 10 hours to complete the game, if you haven't completed the game before then, you die. The clock is ticking, get to work.",
        options: [{
            text: "Unlock Iron",
            nextText: 14
        }]
    }, {
        id: 14,
        text: "Finally, making some progress. I'm waiting for that gem.",
        options: [{
            text: "Unlock Steel",
            nextText: 15
        }]
    }, {
        id: 15,
        text: "Keep working, you're never going to survive at this pace.",
        options: [{
            text: "Unlock Titanium",
            nextText: 16
        }]
    }, {
        id: 16,
        text: "If i see you slack off one more time i'm turning off the lights.",
        options: [{
            text: "Unlock Diamond",
            nextText: 17
        }]
    }, {
        id: 17,
        text: "No one has ever made it this far, maybe you do have a chance at surviving.",
        options: [{
            text: "Unlock the Gem",
            nextText: 18
        }]
    }, {
        id: 18,
        text: "You actually found it, I'm impressed.",
        options: [{
            text: "Continue",
            nextText: 19
        }]
    }, {
        id: 19,
        text: "Go on, give it to me.",
        options: [{
            text: "Give the gem to the Machine",
            nextText: 20
        }, {
            text: "Keep the gem to yourself",
            nextText: 21
        }]
    }, {
        id: 20,
        text: "You give the gem to the Machine, it quickly snatches it away",
        options: [{
            text: "Continue",
            nextText: 22
        }, ]
    }, {
        id: 21,
        text: "You keep the gem to yourself, you found it after all. It is yours.",
        options: [{
            text: "Continue",
            nextText: 23
        }]
    }, {
        id: 22,
        text: "Come here, come over here. I'll let you out now.",
        options: [{
            text: "Continue",
            nextText: 24
        }]
    }, {
        id: 23,
        text: "YOU WILL NOT LIVE FOR LONG, ENJOY THE TIME YOU HAVE WITH MY GEM.",
        options: [{
            text: "Fight the Machine",
            nextText: 25,
        }, {
            text: "Run away from the Machine, into the depths of the pitch black mines",
            nextText: 26
        }]
    }, {
        id: 24,
        text: "The machine lets you into a little room and you feel your feet tremble and legs get weaker as the Machine rapidly brings you to the surface",
        options: [{
            text: "Continue",
            nextText: 27
        }]
    }, {
        id: 25,
        text: "The Machine is far too study for you to hurt it, your attempt is futile. It kills you swiftly.",
        options: [{
            text: "Continue",
            nextText: 100,
        }]
    }, {
        id: 26,
        text: "You run away from the Machine into the dark, you can't go back. You die by starvation holding your gem until your very last breath",
        options: [{
            text: "Continue",
            nextText: 100
        }]
    }, {
        id: 27,
        text: "You feel the air getting warmer and the speed at which you're travelling decrease, you're almost there",
        options: [{
            text: "Continue",
            nextText: 28
        }]
    }, {
        id: 28,
        text: "Thank you for your service young one, welcome out haha ha ha h...",
        options: [{
            text: "Continue",
            nextText: 29
        }]
    }, {
        id: 29,
        text: "There is nothing. The surface is scorching how and there is nothing but sand and dust. You die from radiation wihtin the hour.",
        options: [{
            text: "Continue",
            nextText: 100,
        }]
    }

    , {
        id: 100,
        text: "You're dead.",
        options: [{
            text: "Click to restart.",
            nextText: -1
        }]
    }
]

// Input logic

/**
 * Opens and closes a modal containing a textfield
 */
function input() {
    // Get the modal
    let modal = document.getElementById("modal");

    modal.style.display = "flex";

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
/**
 * Takes the text from an input field and test if it contains the correct string to win the game
 */
function password() {
    let password = "Password"
    let answer = document.getElementById("inputAnswer").value
    if (answer == password) {
        alert("You won!")
    }
}

startGame()