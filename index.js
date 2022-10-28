//Get the numbers
const number = document.querySelectorAll('.number');
//First card button
const submitBtn = document.querySelector('.btn');
//Thank you card
const ratedNumber = document.querySelector('.user-rating');

//Rating and Thank you pages
const ratingPage = document.querySelector('.rating');
const tyPage = document.querySelector('.thank-you');


//Reset the style everytime after click
function defaultNumberStyling () {
    number.forEach((num) => {
        num.style.color = 'hsl(217, 12%, 63%)';
        num.style.backgroundColor = 'hsl(216, 12%, 8%)';

    })
}


//Sets new style
function selecteRatingNumber(){
    number.forEach((num) => num.addEventListener('click', (e) => {
        defaultNumberStyling();
        num.style.backgroundColor = 'hsl(217, 12%, 63%)';
        num.style.color = '#ffffff'
        
        //Hides the rating card and shows the thank you message
        submitBtn.addEventListener('click', () => {
            ratingPage.classList.add('active');
            tyPage.classList.add('active');

            ratedNumber.innerHTML = num.innerHTML
        })
    }))
}

selecteRatingNumber()