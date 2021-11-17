const textElement = document.getElementById('story')
const optionsButtonsElement = document.getElementById('options-buttons')

let state = {}

function StartGame() {
    state = {}
    ShowTextNode(1)
}

function ShowTextNode() {
    const TextNode = TextNodes.find(TextNode => TextNode.id === TextNodeIndex)

    textElement.innerText = TextNode.text

    while (optionsButtonsElement.firstChild) {
        optionsButtonsElement.removeChild(optionsButtonsElement.firstChild)
    }

    TextNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionsButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return StartGame()
    }
    state = Object.assign(state, option.setState)
    ShowTextNode(nextTextNodeId)
}

const TextNodes = [{
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
        nextText: 5
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
    text: "Oh, now you can talk? Welcome to the deep $name, this is our home",
    options: [{
        text: "Continue",
        nextText: 8
    }]
}]

StartGame()