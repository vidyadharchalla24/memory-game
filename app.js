document.addEventListener('DOMContentLoaded', function(){

    const cardArray = [
        {
            name : 'milkshake',
            img : '/images/milkshake.png'
        },
        {
            name : 'cheeseburger',
            img : '/images/cheeseburger.png'
        },
        {
            name : 'fries',
            img : '/images/fries.png'
        },
        {
            name : 'hotdog',
            img : '/images/hotdog.png'
        },
        {
            name : 'ice-cream',
            img : '/images/ice-cream.png'
        },
        {
            name : 'pizza',
            img : '/images/pizza.png'
        },
        {
            name : 'milkshake',
            img : '/images/milkshake.png'
        },
        {
            name : 'cheeseburger',
            img : '/images/cheeseburger.png'
        },
        {
            name : 'fries',
            img : '/images/fries.png'
        },
        {
            name : 'hotdog',
            img : '/images/hotdog.png'
        },
        {
            name : 'ice-cream',
            img : '/images/ice-cream.png'
        },
        {
            name : 'pizza',
            img : '/images/pizza.png'
        }
    ]

    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []


    cardArray.sort(()=> 0.5 - Math.random())

    const grid = document.getElementById('grid');
    const result = document.getElementById('result');

    function createBoard (){
        for (let index = 0; index < cardArray.length; index++) {
            let cards = document.createElement('img')
            cards.setAttribute('src', '/images/blank.png')
            cards.setAttribute('data-id', index)
            cards.addEventListener('click', cardFlip);
            grid.appendChild(cards)            
        }
    }

    function cardFlip(){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(matchCards,500)
        }
    }

    function matchCards (){
        const cards = document.querySelectorAll('img')
        const firstId = cardsChosenId[0]
        const secondId = cardsChosenId[1]
        if(firstId === secondId){
            cards[firstId].setAttribute('src','/images/blank.png')
            cards[secondId].setAttribute('src','/images/blank.png')
            alert('you have clicked same image!')
        }else if(cardsChosen[0] === cardsChosen[1]){
            alert('you won !')
            cards[firstId].setAttribute('src','/images/white.png')
            cards[secondId].setAttribute('src','/images/white.png')
            cards[firstId].removeEventListener('click',cardFlip)
            cards[secondId].removeEventListener('click',cardFlip)
            cardsWon.push(cardsChosen)
        }else { 
            cards[firstId].setAttribute('src','/images/blank.png')
            cards[secondId].setAttribute('src','/images/blank.png')
            alert('sorry try again !')
        }
        cardsChosen = []
        cardsChosenId = []
        result.textContent = cardsWon.length
        if  (cardsWon.length === cardArray.length/2) {
            result.textContent = 'Congratulations! You found them all!'
        }
    }

    createBoard()
})