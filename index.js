function changeHeading(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const heading = document.querySelector('h1')
    heading.innerHTML = name
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)

function updateDiv(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const heading = document.querySelector('#stats')
    heading.innerHTML = name
}

const div = document.querySelector('#stats')
div.addEventListener('submit', updateDiv)