const addBtn = document.querySelector('.add-btn')
const modalCont = document.querySelector('.modal-cont')
let addTaskFlag = false

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