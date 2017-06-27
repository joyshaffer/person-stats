function changeHeading(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value 
    const age = f.personAge.value
    const color = f.textColor.value
    const heading = document.querySelector('#stats p')
    heading.textContent = name
    heading.style.color = textColor
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)


/*function nameToParagraph(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const para = document.querySelector('p')
    para.textContent = name
}

const paraName = document.querySelector('#stats')
paraName.addEventListener('submit', nameToParagraph)*/

