
const gameInit = (() => {   
    const allCards = document.querySelectorAll('.cardContainer');
    
    allCards.forEach((card) => {
        card.addEventListener('click', cardFlipper);
    });
    
    function cardFlipper(e) {
        const clickedCard = e.target.closest('.innerFlip');
        
        if (clickedCard.style.transform === 'rotateY(180deg)') {
            clickedCard.style.transform = 'rotateY(0deg)'
        } else {
            clickedCard.style.transform = 'rotateY(180deg)';
            clickedCard.querySelector('.back').style.transform = 'rotateY(180deg)';
            playCount();
        }
        
    function playCount () {
        count;
        count + 1;
        console.log(count);
        }
        
}
})();

function placeImages () {
    
};












                  
        

