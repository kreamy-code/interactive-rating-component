const card = document.querySelector('.card')
const card2 = document.querySelector('.card2')

const submitBtn = document.getElementById("submit")
const rating = document.getElementById('rating')
const rates = document.querySelectorAll(".btn")


submitBtn.addEventListener("click", () => {
    card2.classList.remove('hide')
    card.classList.add('hide')
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})