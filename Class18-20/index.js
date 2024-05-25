const addBtn = document.querySelector('.add-btn')
const removeBtn = document.querySelector('.remove-btn')
const modalCont = document.querySelector('.modal-cont')
const allPriorityColors = document.querySelectorAll('.priority-color')
const textAreaCont = document.querySelector('.textArea-cont')
const mainCont = document.querySelector('.main-cont')
const toolboxColors = document.querySelectorAll('.color')
const colors = ['lightpink', 'lightgreen', 'lightblue', 'black']
const lockIconClass = 'fa-lock'
const unlockIconClass = 'fa-lock-open'
let addTaskFlag = false
let removeTaskFlag = false
let modalPriorityColor = 'lightpink'
let ticketArray = []

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
        createTicket(modalPriorityColor, ticketDesc, ticketId, true)

        // close the modal
        modalCont.style.display = 'none'
        addTaskFlag = !addTaskFlag

        // clear text area
        textAreaCont.value = ''
    }
})

const createTicket = (color, desc, id, shouldAdd) => {
    const ticketCont = document.createElement('div')
    ticketCont.classList.add('ticket-cont')

    ticketCont.innerHTML = `<div class="ticket-color ${color}"></div>
                            <div class="ticket-id">${id}</div>
                            <div class="task-area">${desc}</div>
                            <div class="ticket-lock">
                                <i class="fa-solid fa-lock"></i>
                            </div>`

    mainCont.appendChild(ticketCont)

    const ticketMetadata = {
        color,
        desc,
        id
    }
    if (shouldAdd) {
        ticketArray.push(ticketMetadata)
        localStorage.setItem("tickets", JSON.stringify(ticketArray))
    }

    // const ticketMetadata = {
    //     color: color,
    //     desc: desc,
    //     id: id
    // }

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
            const ticketId = ticket.children[1].innerText

            const ticketIndex = ticketArray.findIndex(t => {
                return t.id === ticketId
            })

            ticketArray.splice(ticketIndex, 1)

            localStorage.setItem("tickets", JSON.stringify(ticketArray))

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

        const ticketId = ticket.children[1].innerText

        ticketArray.forEach(t => {
            if (t.id === ticketId) {
                // update color of ticket "t"
                t.color = newColor
            }
        })

        localStorage.setItem("tickets", JSON.stringify(ticketArray))
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

            const ticketId = ticket.querySelector('.ticket-id').innerText

            ticketArray.forEach(t => {
                if (t.id === ticketId) {
                    // update desc
                    t.desc  = taskArea.innerText
                }
            })

            localStorage.setItem("tickets", JSON.stringify(ticketArray))
        }
    })
}

// Implement filter
toolboxColors.forEach(toolboxColor => {
    toolboxColor.addEventListener('click', event => {
        const selectedToolBoxColor = toolboxColor.classList[0]

        const filteredTickets = ticketArray.filter(ticket => {
            return selectedToolBoxColor === ticket.color
        })

        console.log("Filtered tickets: ", filteredTickets)
        console.log("All Tickets: ", ticketArray)

        const allTickets = document.querySelectorAll('.ticket-cont')

        allTickets.forEach(ticket => {
            ticket.remove()
        })

        filteredTickets.forEach(filteredTicket => {
            createTicket(filteredTicket.color, filteredTicket.desc, filteredTicket.id, false)
        })
    })

    toolboxColor.addEventListener('dblclick', event => {
        // remove all tickets from DOM
        const allTickets = document.querySelectorAll('.ticket-cont')

        allTickets.forEach(ticket => {
            ticket.remove()
        })
        // create all tickets from ticketArray
        ticketArray.forEach(ticket => {
            createTicket(ticket.color, ticket.desc, ticket.id, false)
        })
    })
})

const ticketsLocalStorage = localStorage.getItem('tickets')
if (ticketsLocalStorage) {
   ticketArray = JSON.parse(ticketsLocalStorage)
   ticketArray.forEach(ticket => {
        createTicket(ticket.color, ticket.desc, ticket.id, false)
   })
}