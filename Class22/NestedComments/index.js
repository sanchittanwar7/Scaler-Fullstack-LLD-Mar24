const commentContainer = document.querySelector('.container')

const createInputBox = () => {
    const div = document.createElement('div')
    div.setAttribute('class', 'comment-reply-section')
    div.innerHTML = `<input type="text" class="input" placeholder="Write reply">
                    <button class="btn submit">Submit</button>`
    return div
}

const createReply = text => {
    const div = document.createElement('div')
    div.setAttribute('class', 'all-comments')
    div.innerHTML = `<div class="card">
                        <span class="text">${text}</span>
                        <span id="reply" class="reply">Add reply</span>
                    </div>`
    return div
}

commentContainer.addEventListener('click', event => {
    const isReplyButtonClicked = event.target.classList.contains('reply')
    const isSubmitButtonClicked = event.target.classList.contains('submit')

    if (isReplyButtonClicked) {
        const closestCard = event.target.closest('.all-comments')
        const inputBox = createInputBox()
        closestCard.appendChild(inputBox)
    } 
    if (isSubmitButtonClicked) {
        // get the closest card
        const closestCard = event.target.closest('.all-comments')
        // get text that user has entered
        const commentClosest = event.target.closest('.comment-reply-section')
        const inputSection = commentClosest.children[0]
        const inputText = inputSection.value

        if (inputText) {
            // create a div.all-comments with the text
            const replyComment = createReply(inputText)
            // append the reply to closest card
            closestCard.appendChild(replyComment)
            // close the input field
            commentClosest.remove()
        }
        
    }
})