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
    return true
}

const TextNodes = [{
    id: 1,
    text: "Goodmorning, You're finally awake",
    options: [{
            text: "Where am i?",
            setState: { WhereAm: true },
            nextText: 2
        },
        {
            text: "Who are you?"
        },
        {
            text: "Stay quiet.."
        }
    ]
}, {
    id: 2,
    text: "You're home."
}]

StartGame()