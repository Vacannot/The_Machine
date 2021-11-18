const textElement = document.getElementById('story')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

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

    // Default values
    coalCount: 0,
    coalCost: 10,
    coalLevel: 0,
    coalDelay: 100,

    ironCount: 0,
    ironCost: 10,
    ironLevel: 0,
    ironDelay: 100,

    steelCount: 0,
    steelCost: 10,
    steelLevel: 0,
    steelDelay: 100,

    titaniumCount: 0,
    titaniumCost: 10,
    titaniumLevel: 0,
    titaniumDelay: 100,

    diamondCount: 0,
    diamondCost: 10,
    diamondLevel: 0,
    diamondDelay: 100,
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

function reset() {
    storage.setCoal = 0
    storage.setCoalCost = 10
    storage.setCoalLevel = 0

    storage.setIron = 0
    storage.setIronCost = 10
    storage.setIronLevel = 0

    storage.setSteel = 0
    storage.setSteelCost = 10
    storage.setSteelLevel = 0

    storage.setTitanium = 0
    storage.setTitaniumCost = 10
    storage.setTitaniumLevel = 0

    storage.setDiamond = 0
    storage.setDiamondCost = 10
    storage.setDiamondLevel = 0

    storage.setGem = 0
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function startGame() {
    state = {}
    reset()
    showTextNode(1)
}

function round(number) {
    return Number.parseFloat(number).toFixed(0)
}

function unlockStoryButton() {
    document.getElementById("storyButton").disabled = false
}


// Coal logic

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

function upgradeCoal() {

    let currentCoal = storage.getCoal
    let currentCost = storage.getCoalCost
    let currentLevel = storage.getCoalLevel

    if (currentCoal >= currentCost) {
        currentLevel = currentLevel + 1
        currentCoal = currentCoal - currentCost
        currentCost = currentCost * 1.5

        displayCoalCost()
        displayCoal()

        storage.setCoal = currentCoal
        storage.setCoalCost = currentCost
        storage.setCoalLevel = currentLevel

        displayCoalCost()
        displayCoal()
    } else {
        alert("You don't have enough coal to afford this upgrade")
    }
}

function addCoal() {

    let coalCurrent = storage.getCoal
    coalCurrent = coalCurrent + 1
    storage.setCoal = coalCurrent
    displayCoal()

    let first = storage.getUnlockedIron

    if (storage.getCoal >= 100 && first == false) {
        unlockStoryButton()
        storage.setUnlockedIron = true
        console.log("You should only do this once dumb computer")
    }
}

function displayCoal() {
    let coalElement = document.getElementById("coalSumText")
    coalElement.innerText = "Amount: " + round(storage.getCoal)
}

function displayCoalCost() {
    let coalElement = document.getElementById("coalCostText")
    coalElement.innerText = "Cost: " + (round(storage.getCoalCost)) + " Coal"
}

function unlockCoal() {

    let coalLevel = storage.getCoalLevel
    if (coalLevel < 1) {
        coalLevel = coalLevel + 1
        storage.setCoalLevel = coalLevel
        coal()
        document.getElementById("unlockCoal").disabled = true
    }
}

function unlockCoalButton() {
    document.getElementById("unlockCoal").disabled = false
    document.getElementById("upgradeCoal").disabled = false
}

// Iron logic

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

function upgradeIron() {

    let currentIron = storage.getIron
    let currentCost = storage.getIronCost
    let currentLevel = storage.getIronLevel

    if (currentIron >= currentCost) {
        currentLevel = currentLevel + 1
        currentIron = currentIron - currentCost
        currentCost = currentCost * 1.5

        displayIronCost()
        displayIron()

        storage.setIron = currentIron
        storage.setIronCost = currentCost
        storage.setIronLevel = currentLevel

        displayIronCost()
        displayIron()
    } else {
        alert("You don't have enough iron to afford this upgrade")
    }
}

function addIron() {

    let ironCurrent = storage.getIron
    ironCurrent = ironCurrent + 1
    storage.setIron = ironCurrent
    displayIron()

    let first = storage.getUnlockedSteel

    if (storage.getIron >= 100 && first == false) {
        unlockStoryButton()
        storage.setUnlockedSteel = true
        console.log("You should only do this once dumb computer")
    }


}

function displayIron() {
    let ironElement = document.getElementById("ironSumText")
    ironElement.innerText = "Amount: " + round(storage.getIron)
}

function displayIronCost() {
    let ironElement = document.getElementById("ironCostText")
    ironElement.innerText = "Cost: " + (round(storage.getIronCost)) + " Coal"
}

function unlockIron() {

    let ironLevel = storage.getIronLevel
    if (ironLevel < 1) {
        ironLevel = ironLevel + 1
        storage.setIronLevel = ironLevel
        iron()
        document.getElementById("unlockIron").disabled = true
    }
}

function unlockIronButton() {
    document.getElementById("unlockIron").disabled = false
    document.getElementById("upgradeIron").disabled = false
}

// Steel logic

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

function upgradeSteel() {

    let currentSteel = storage.getSteel
    let currentCost = storage.getSteelCost
    let currentLevel = storage.getSteelLevel

    if (currentSteel >= currentCost) {
        currentLevel = currentLevel + 1
        currentSteel = currentSteel - currentCost
        currentCost = currentCost * 1.5

        displaySteelCost()
        displaySteel()

        storage.setSteel = currentSteel
        storage.setSteelCost = currentCost
        storage.setSteelLevel = currentLevel

        displaySteelCost()
        displaySteel()
    } else {
        alert("You don't have enough steel to afford this upgrade")
    }
}

function addSteel() {
    let steelCurrent = storage.getSteel
    steelCurrent = steelCurrent + 1
    storage.setSteel = steelCurrent
    displaySteel()

    let first = storage.getUnlockedTitanium

    if (storage.getSteel >= 100 && first == false) {
        unlockStoryButton()
        storage.setUnlockedTitanium = true
        console.log("You should only do this once dumb computer")
    }


}

function displaySteel() {
    let steelElement = document.getElementById("steelSumText")
    steelElement.innerText = "Amount: " + round(storage.getSteel)
}

function displaySteelCost() {
    let steelElement = document.getElementById("steelCostText")
    steelElement.innerText = "Cost: " + (round(storage.getSteelCost)) + " Coal"
}

function unlockSteel() {

    let steelLevel = storage.getSteelLevel
    if (steelLevel < 1) {
        steelLevel = steelLevel + 1
        storage.setSteelLevel = steelLevel
        steel()
        document.getElementById("unlockSteel").disabled = true
    }
}

function unlockSteelButton() {
    document.getElementById("unlockSteel").disabled = false
    document.getElementById("upgradeSteel").disabled = false
}

// Titanium logic

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

function upgradeTitanium() {

    let currentTitanium = storage.getTitanium
    let currentCost = storage.getTitaniumCost
    let currentLevel = storage.getTitaniumLevel

    if (currentTitanium >= currentCost) {
        currentLevel = currentLevel + 1
        currentTitanium = currentTitanium - currentCost
        currentCost = currentCost * 1.5

        displayTitaniumCost()
        displayTitanium()

        storage.setTitanium = currentTitanium
        storage.setTitaniumCost = currentCost
        storage.setTitaniumLevel = currentLevel

        displayTitaniumCost()
        displayTitanium()
    } else {
        alert("You don't have enough titanium to afford this upgrade")
    }
}

function addTitanium() {
    let titaniumCurrent = storage.getTitanium
    titaniumCurrent = titaniumCurrent + 1
    storage.setTitanium = titaniumCurrent
    displayTitanium()

    let first = storage.getUnlockedDiamond

    if (storage.getTitanium >= 100 && first == false) {
        unlockStoryButton()
        storage.setUnlockedDiamond = true
        console.log("You should only do this once dumb computer")
    }


}

function displayTitanium() {
    let titaniumElement = document.getElementById("titaniumSumText")
    titaniumElement.innerText = "Amount: " + round(storage.getTitanium)
}

function displayTitaniumCost() {
    let titaniumElement = document.getElementById("titaniumCostText")
    titaniumElement.innerText = "Cost: " + (round(storage.getTitaniumCost)) + " Coal"
}

function unlockTitanium() {

    let titaniumLevel = storage.getTitaniumLevel
    if (titaniumLevel < 1) {
        titaniumLevel = titaniumLevel + 1
        storage.setTitaniumLevel = titaniumLevel
        titanium()
        document.getElementById("unlockTitanium").disabled = true
    }
}

function unlockTitaniumButton() {
    document.getElementById("unlockTitanium").disabled = false
    document.getElementById("upgradeTitanium").disabled = false
}

// Diamond logic

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

function upgradeDiamond() {

    let currentDiamond = storage.getDiamond
    let currentCost = storage.getDiamondCost
    let currentLevel = storage.getDiamondLevel

    if (currentDiamond >= currentCost) {
        currentLevel = currentLevel + 1
        currentDiamond = currentDiamond - currentCost
        currentCost = currentCost * 1.5

        displayDiamondCost()
        displayDiamond()

        storage.setDiamond = currentDiamond
        storage.setDiamondCost = currentCost
        storage.setDiamondLevel = currentLevel

        displayDiamondCost()
        displayDiamond()
    } else {
        alert("You don't have enough diamond to afford this upgrade")
    }
}

function addDiamond() {
    let diamondCurrent = storage.getDiamond
    diamondCurrent = diamondCurrent + 1
    storage.setDiamond = diamondCurrent
    displayDiamond()

    let first = storage.getUnlockedGem

    console.log("--")

    if (storage.getDiamond >= 100 && first == false) {
        unlockStoryButton()
        storage.setUnlockedGem = true
        console.log("Gem Unlocked")
    }


}

function displayDiamond() {
    let diamondElement = document.getElementById("diamondSumText")
    diamondElement.innerText = "Amount: " + round(storage.getDiamond)
}

function displayDiamondCost() {
    let diamondElement = document.getElementById("diamondCostText")
    diamondElement.innerText = "Cost: " + (round(storage.getDiamondCost)) + " Coal"
}

function unlockDiamond() {

    let diamondLevel = storage.getDiamondLevel
    if (diamondLevel < 1) {
        diamondLevel = diamondLevel + 1
        storage.setDiamondLevel = diamondLevel
        diamond()
        document.getElementById("unlockDiamond").disabled = true
    }
}

function unlockDiamondButton() {
    document.getElementById("unlockDiamond").disabled = false
    document.getElementById("upgradeDiamond").disabled = false
}

// Gem logic


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
    } else {}
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.setAttribute("id", "storyButton")
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
            storyEvents(textNodeIndex)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

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

startGame()