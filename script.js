const input = document.getElementById('input')
const choiceContainer = document.querySelector('.choiceContainer')

input.focus()

const randomChoice = () =>{
    const choiceClass = document.querySelectorAll('.choice')
    const length = choiceClass.length
    const times = 30

    const interval = setInterval(() => {
        const randomIdx = Math.floor(Math.random()*length)
        choiceClass[randomIdx].classList.add('active')
        
        setTimeout(() => {
            choiceClass[randomIdx].classList.remove('active')
        }, 100)

    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomIdx = Math.floor(Math.random()*length)
            choiceClass[randomIdx].classList.add('active')
        }, 100)
    }, times * 100)
}

const createChoices = (inputValue) => {
    const choices = inputValue.split(' ')
    choices.forEach(choice => {
        const choiceDiv = document.createElement('div')
        choiceDiv.classList.add('choice')
        choiceDiv.innerText = choice
        choiceContainer.appendChild(choiceDiv)
    })
    randomChoice()
}

input.addEventListener('keydown', (e) => {
    choiceContainer.innerHTML = ''
    while(e.key=='Enter'){

        if(input.value == '' || input.value == ' ') break
        const inputValue = input.value
        createChoices(inputValue)
        input.value = ''
        break
    }
})