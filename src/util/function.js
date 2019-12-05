function shuffle(arr) {
    const shuffleCards = arr
    for (let i = 0; i < arr.length - 1 ; i++ ) {
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let temp = shuffleCards[i]
        shuffleCards[i] = shuffleCards[randomIndex]
        shuffleCards[randomIndex] = temp
    }
    
    return shuffleCards
}


export default function initializeDeck() {
    let id = 0 
    const cards = [
        'red',
        'blue'
        // ,
        // 'green',
        // 'yellow',
        // 'pink',
        // 'orange',
        // 'lightblue',
        // 'gold'
    ].reduce((acc , type) => {
        acc.push({
            id:id++,
            type
        })
        // one pair of each type
        acc.push({
            id:id++,
            type
        })
        return acc
    },[])
 
    return shuffle(cards)
}