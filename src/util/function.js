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


export  function initializeDeck() {
    let id = 0 
    const cards = [
        'red',
        'blue',
        'green',
        'yellow',
        'pink',
        'orange',
        'lightblue',
        'gold'
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

export function savePlayersData(values) { //this is an object
    if ( window.localStorage.getItem('Players Data') ){
        let data = window.localStorage.getItem('Players Data')
        data = JSON.parse(data)
        data.push(values)
        data = JSON.stringify(data)
        window.localStorage.setItem('Players Data',data)
    } else {
        let data = []
        data = [values]
        data = JSON.stringify(data)
        window.localStorage.setItem('Players Data',data)
    }
}

export function sortAndRank(arr) {
    arr.sort((c1, c2) => {
        return c2.score - c1.score
    })
      
    arr = arr.map((val, index) => {
        val.rank = index + 1
        return val
    })
    
    return arr
}