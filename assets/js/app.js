// Fetching Dom Elements
const body = document.querySelector('body');
const content = document.querySelector('.main-content figure');
const btnQ = document.querySelector('#quotebtn');
const tagCategory = document.querySelector('.tag-category');
const bgColors = ['#392e24', '#242439', '#242453', '#243939', '#392924', '#392439'];

// Initialize Quotation
class Quotation {
    constructor(quote, citation, source, year, tags) {
        this.quote = quote;
        this.citation = citation;
        this.source = source;
        this.year = year;
        this.tags = tags;
    }
}
const quoteArray = [
    new Quotation(`The truth is always found in simplicity and not in the multiplicity and confusion of things`, `Isaac Newton,`, `Book,`, 1974, ['Science']),
    new Quotation(`Every great developer you know got there by solving problems they were unqualified to solve until they actually did it`, `Patrick McKenzie,`, `Twitter,`, 2016, ['Programming', 'Positive']),
    new Quotation(`If you’re always trying to be normal you will never know how amazing you can be`, `Maya Angelou`, '', '', ['Positive']),
    new Quotation(`Be being yourself, you put something wonderful in the world that was not there before`, `Edwin Elliot,`, '', 2018, ['Positive']),
    new Quotation(`Preparation can only take you so far. After that, you have to take a few leaps of faith`, `Michael Scofield,`, `Prison Break,`, 2005, ['Series', 'Movie']),
    new Quotation(`We've always defined ourselves by the ability to overcome the impossible`, `Cooper,`, `Interstellar,`, 2014, ['Series', 'Movie']),
    new Quotation(`Nature doesn't need people - people need nature`, `Harrison Ford,`, `Journal,`, '', ['Positive', 'Life']),
    new Quotation(`In this world, everything is governed by balance. There’s what you stand to gain and what you stand to lose. And when you think you’ve got nothing to lose, you become overconfident`, `Sergio Marquina,`, `Money Heist,`, 2017, ['Series']),
    new Quotation(`Good and evil are a question of perspective`, `Mikkel Nielsen,`, `Dark,`, 2017, ['Series']),
    new Quotation(`Fear cuts deeper than swords`, `Arya Stark,`, `Game of Thrones,`, 2011, ['Series']),
];

/******************************************
Function
******************************************/
const printQuote = (array) => {
    jQuery("#preloader").show().fadeOut(250);
    let indexNo = randomIndex(0, array.length);
    let indexBg = randomIndex(0, bgColors.length);
    content.innerHTML = `
        <blockquote class="blockquote">
            <q>${array[indexNo].quote}</q>
        </blockquote>
        <figcaption class="blockquote-footer">
            ${array[indexNo].citation}
            <cite>${array[indexNo].source}</cite>
            <span>${array[indexNo].year}</span>
        </figcaption>
    `;
    body.style.background = bgColors[indexBg];
}
const randomIndex = (min, max) => {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}
const tagFunction = () => {
    const tagsCount = quoteArray.map((element) => {
        return element.tags;
    }).flat();
    let tags = tagsCount.filter(function (element, index) {
        return tagsCount.indexOf(element) === index;
    });
    tags.forEach((element) => {
        let count = quoteArray.filter((x) => {
            return x.tags.includes(element);
        });
        tagCategory.innerHTML += `
        <li class="list-inline-item">
            <button type="button" class="btn badge"><span class="tag-name">${element}</span><span
                    class="count">${count.length}</span></button>
        </li>
    `
    });
}
/******************************************
Event Listener
******************************************/
btnQ.addEventListener('click', (e) => {
    printQuote(quoteArray);
});
tagCategory.addEventListener('click', (e) => {
    const eTarget = e.target;
    if (eTarget.type == 'button') {
        const tagName = eTarget.querySelector('.tag-name').textContent;
        let tagArray = quoteArray.filter((x) => {
            return x.tags.includes(tagName);
        });
        printQuote(tagArray);
    }
});

/******************************************
Initial Stage
******************************************/
printQuote(quoteArray);
tagFunction();
setInterval(printQuote(quoteArray), 20000);