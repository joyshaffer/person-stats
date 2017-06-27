function changeHeading(ev) {
    ev.preventDefault()
    const f = event.target
    const name = f.personName.value 
    const age = f.personAge.value
    const color = f.textColor.value
    const div = document.querySelector('#stats')

    const p = document.createElement('p')
    p.textContent = `<p>${name}, age ${age}</p>`
    p.style.color = color
    div.appendChild(p)

    //div.innerHTML = name
    //***div.innerHTML = '<p>' + name + ', age ' + age + '</p>'    
    //div.innerHTML = `<p style="color: ${color}">${name}, age ${age}</p>`
    //gets own paragraph
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)


