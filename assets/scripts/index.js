const language = document.querySelector('#linguagem')
const codeArea = document.querySelector('.editor-area-container')
const button = document.querySelector('.highlight-button')
const editorBg = document.querySelector('.editor-area-total')
var colorEditor = document.querySelector('.editor-color')

function applyHighlight() {
    const code = codeArea.innerText
    codeArea.innerHTML = 
                `<div class="editor-area-container">
                    <div class="editor-icons">
                        <div class="red-circle"></div>
                        <div class="yellow-circle"></div>
                        <div class="green-circle"></div>
                    </div>
                        <code class="editor-area-input preview hlsj ${language.value}" contenteditable="true" aria-label="Editor de código"></code>
                </div>`
    codeArea.querySelector('code').textContent = code
    hljs.highlightElement(codeArea.querySelector('code'))
}

function selectedColor() {
    var actualColor = colorEditor.value
    editorBg.style.backgroundColor = actualColor
}

button.addEventListener('click', () => {
    applyHighlight()
})

colorEditor.addEventListener('change', ()=> {
    selectedColor()
})