// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

function cardCreator(obj, topic) {
    const card = elementCreator({ type: 'div', classList: ['card', topic], parent: cardsContainer, attributes: [['data-topic', topic]] });
    const headline = elementCreator({ type: 'div', classList: ['headline'], textContent: obj.headline, parent: card });
    const author = elementCreator({ type: 'div', classList: ['author'], parent: card });
    const imgContainer = elementCreator({ type: 'div', classList: ['img-container'], parent: author });
    const img = elementCreator({ type: 'img', attributes: [['src', obj.authorPhoto]], parent: imgContainer });
    const authorName = elementCreator({ type: 'span', textContent: `By ${obj.authorName}`, parent: author });
}

axios
    .get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
        const { articles } = response.data;
        const keys = Object.keys(articles);
        keys.forEach(topic => {
            articles[topic].forEach(dataObj => {
                cardCreator(dataObj, topic);
            });
        });

        const tabsBar = document.querySelector('.topics');
        const tabs = document.querySelectorAll('.tab');
        const cards = document.querySelectorAll('.card');

        tabsBar.addEventListener('click', event => {
            if (event.target.textContent === 'ALL') {
                tabs.forEach(tab => tab.classList.remove('active-tab'));
                tabs[0].classList.add('active-tab');
                
                cards.forEach(card => (card.style.display = 'initial'));
            } else {
                tabs[0].classList.remove('active-tab');
                event.target.classList.toggle('active-tab');

                cards.forEach(card => (card.style.display = 'none'));

                let activeTabs = document.querySelectorAll('.active-tab');
                activeTabs.forEach(tab => {
                    let tabCards = document.querySelectorAll(`[data-topic='${tab.textContent}']`);
                    if (tabCards.length === 0) tabCards = document.querySelectorAll(`[data-topic='node']`);
                    tabCards.forEach(tabCard => (tabCard.style.display = 'initial'));
                });
            }
        });
        const dataTopics = document.querySelectorAll("[data-topic='javascript']");
        console.log('dataTopics: ', dataTopics);
    })
    .catch(err => console.log(err));
