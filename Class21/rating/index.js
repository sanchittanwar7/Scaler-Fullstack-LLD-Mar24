const ratingCount = document.querySelector('#star-rating')
const stars = document.querySelectorAll('.star')

stars.forEach(star => {
    star.addEventListener('click', event => {
        const currentIndex = event.target.dataset.index

        stars.forEach((star, index) => {
            if(index < currentIndex) {
                star.classList.add('star-colored')
            } else {
                star.classList.remove('star-colored')
            }
        })

        ratingCount.innerText = currentIndex
    })
})