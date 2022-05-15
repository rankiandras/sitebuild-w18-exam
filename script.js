const beerCardsDiv = `
    <div id="beerCards"></div>
`

const beers = {
    id: "beers",
    logo: "Best Beers",
    button: "details",
    cards: [
        {
            title: "Mango Bay",
            sub: "Mad Scientist Beer",
            text: "Pale Ale - American"
        },
        {
            title: "Távoli Galaxis",
            sub: "Rothbeer Brewery",
            text: "IPA - American"
        },
        {
            title: "Flying Rabbit AIPA",
            sub: "MONYO Brewing Co.",
            text: "IPA - American"
        },
        {
            title: "Liquid Cocaine",
            sub: "Mad Scientist Beer",
            text: "IPA - Imperial"
        },
        {
            title: "Organic Chocolate Stout",
            sub: "Samuel Smith Old Brewery",
            text: "Stout - English"
        },
        {
            title: "Bracia",
            sub: "Thornbridge Brewery",
            text: "Strong Ale - English"
        },
        {
            title: "Oatmeal Stout",
            sub: "Samuel Smith Old Brewery",
            text: "Stout - Oatmeal"
        },
        {
            title: "Black Tokyo Horizon",
            sub: "BrewDog",
            text: "Stout - American Imperial"
        },
        {
            title: "Vintage Ale",
            sub: "Fuller's",
            text: "Old Ale"
        },
        {
            title: "All the Leaves are Brown",
            sub: "Tempest Brewing Company",
            text: "Brown Ale - American"
        },
    ]
}

const beerCard = (num, title, sub, text) => {
    return`
        <div class='card'>
            <div class='number'><p class='numP'>${num}</p></div>
            <div class='details'>
                <p class='title'>${title}</p>
                <p class='sub'>${sub}</p>
                <p class='text'>${text}</p>
                <button><span class='details'>details</span><span class="material-symbols-sharp" id='arrowIcon'>
                arrow_forward</span></button>
            </div>
        </div>
    `
}

const beerCards = (obj) => {
    return obj.cards.map((x,i) => beerCard(i+1, x.title, x.sub, x.text)).join(' ')
}

const header = () => {
    return `
        <header id='header'>
            <span id='caption'>Best Beers</span>
            <span id='headerIcon' class="material-symbols-outlined">menu</span>
        </header>
    `
}


const loadEvent = () => {
    console.log('loaded');
    
    const rootElement = document.getElementById('root');
    rootElement.insertAdjacentHTML('beforeend', header())
    rootElement.insertAdjacentHTML('beforeend', beerCardsDiv)

    const beerCardsDivElement = document.getElementById('beerCards')
    beerCardsDivElement.insertAdjacentHTML('beforeend', beerCards(beers))
    

}

window.addEventListener('load', loadEvent)