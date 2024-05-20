const addBtn = document.querySelector('.add-btn')
const removeBtn = document.querySelector('.remove-btn')
const modalCont = document.querySelector('.modal-cont')
const allPriorityColors = document.querySelectorAll('.priority-color')
const textAreaCont = document.querySelector('.textArea-cont')
const mainCont = document.querySelector('.main-cont')
const colors = ['lightpink', 'lightgreen', 'lightblue', 'black']
const lockIconClass = 'fa-lock'
const unlockIconClass = 'fa-lock-open'
let addTaskFlag = false
let removeTaskFlag = false
let modalPriorityColor = 'lightpink'

addBtn.addEventListener('click', event => {
    addTaskFlag = !addTaskFlag
    if(addTaskFlag) {
        // show the modal
        modalCont.style.display = 'flex'
    } else {
        // hide the modal
        modalCont.style.display = 'none'
    }
})

// Selecting color
allPriorityColors.forEach(colorEle => {
    colorEle.addEventListener('click', event => {
        // remove active class from all the divs
        allPriorityColors.forEach(priorityColor => {
            priorityColor.classList.remove('active')
        })
        // add the active class to div which is clicked
        colorEle.classList.add('active')

        modalPriorityColor = colorEle.classList[0]

    })
})

// Creating ticket
modalCont.addEventListener('keydown', event => {
    const keyPressed = event.key

    if (keyPressed === 'Shift') {
        const ticketDesc = textAreaCont.value
        const ticketId = shortid()
        // create ticket
        createTicket(modalPriorityColor, ticketDesc, ticketId)

        // close the modal
        modalCont.style.display = 'none'
        addTaskFlag = !addTaskFlag

        // clear text area
        textAreaCont.value = ''
    }
})

const createTicket = (color, desc, id) => {
    const ticketCont = document.createElement('div')
    ticketCont.classList.add('ticket-cont')

    ticketCont.innerHTML = `<div class="ticket-color ${color}"></div>
                            <div class="ticket-id">${id}</div>
                            <div class="task-area">${desc}</div>
                            <div class="ticket-lock">
                                <i class="fa-solid fa-lock"></i>
                            </div>`

    mainCont.appendChild(ticketCont)

    handleDelete(ticketCont)

    handleColor(ticketCont)

    handleLock(ticketCont)
}

// Deleting ticket
removeBtn.addEventListener('click', event => {
    removeTaskFlag = !removeTaskFlag
    if (removeTaskFlag) {
        // alert the user
        alert("Delete mode is activated")
        // turn the icon red
        removeBtn.style.color = 'red'
    } else {
        // turn the icon white
        removeBtn.style.color = 'white'
    }
})

const handleDelete = ticket => {
    ticket.addEventListener('click', event => {
        if (removeTaskFlag) {
            // remove the ticket
            ticket.remove()
        }
    })
}

// Changing task category
const handleColor = ticket => {
    const ticketColorBand = ticket.querySelector('.ticket-color')

    ticketColorBand.addEventListener('click', event => {
        const currentColor = ticketColorBand.classList[1]

        let currentColorIndex = colors.findIndex(color => {
            return color == currentColor
        })

        currentColorIndex++;

        const newColorIndex = currentColorIndex % colors.length

        const newColor = colors[newColorIndex]

        // remove current color
        ticketColorBand.classList.remove(currentColor)

        // add new color
        ticketColorBand.classList.add(newColor)
    })
}

// Editing task desc
const handleLock = ticket => {
    const ticketLockEle = ticket.querySelector('.ticket-lock')

    const ticketLockIcon = ticketLockEle.children[0]

    const taskArea = ticket.querySelector('.task-area')

    ticketLockIcon.addEventListener('click', event => {
        if (ticketLockIcon.classList.contains(lockIconClass)) {
            // remove lock icon
            ticketLockIcon.classList.remove(lockIconClass)
            // add unlock icon
            ticketLockIcon.classList.add(unlockIconClass)
            // make text area editable
            taskArea.setAttribute('contenteditable', 'true')
        } else {
            // remove unlock icon
            ticketLockIcon.classList.remove(unlockIconClass)
            // add lock icon
            ticketLockIcon.classList.add(lockIconClass)
            // make text area non-editable
            taskArea.setAttribute('contenteditable', 'false')
        }
    })
}