const textElement = document.getElementById('story')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
    lookForName()
}



function lookForName() {
    while (state.callName === false) {
        console.log("We made it here atleast!")
        if (state.callName == true) {
            let playerName = prompt("Enter your name")
            console.log(playerName)
            return playerName
            state.callName = false
        }
    }
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
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
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
                setState: { quiet: true },
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
        text: "I am no one.",
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
        id: 5,
        text: "What's your name?",
        options: [{
            text: "Continue",
            setState: { callName: true },
            nextText: 6
        }]
    }, {
        id: 6,
        text: "Welcome to the deep $name, this is our home.",
        options: [{
            text: "Continue",
            nextText: 8
        }]
    }, {
        id: 7,
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
            text: "Unlock Coal",
            setState: { coal: true, iron: false, steel: false, titanium: false, diamond: false, gem: false },
            nextText: 13
        }]
    }, {
        id: 13,
        text: "You have 10 hours to complete the game, if you haven't completed the game before then, you die. The clock is ticking, get to work.",
        options: [{
            text: "Unlock Iron",
            requiredState: (currentState) => currentState.iron,
            nextText: 14
        }]
    }, {
        id: 14,
        text: "Finally, making some progress. I'm waiting for that gem.",
        options: [{
            text: "Unlock Steel",
            requiredState: (currentState) => currentState.steel,
            nextText: 15
        }]
    }, {
        id: 15,
        text: "Keep working, you're never going to survive at this pace.",
        options: [{
            text: "Unlock Titanium",
            requiredState: (currentState) => currentState.titanium,
            nextText: 16
        }]
    }, {
        id: 16,
        text: "If i see you slack off one more time i'm turning of the lights.",
        options: [{
            text: "Unlock Diamond",
            requiredState: (currentState) => currentState.diamond,
            nextText: 17
        }]
    }, {
        id: 17,
        text: "No one has ever made it this far, maybe you do have a chance at surviving.",
        options: [{
            text: "Unlock the Gem",
            requiredState: (currentState) => currentState.gem,
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