// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerParent = document.querySelector('.header-container');

function Header() {
    const headerContainer = elementCreator({ type: 'div', classlist: ['header'], parent: headerParent });
    const date = elementCreator({ type: 'span', classlist: ['date'], textContent: new Date(), parent: headerContainer });
    const h1 = elementCreator({ type: 'h1', textContent: 'Lambda Times', parent: headerContainer });
    const temp = elementCreator({ type: 'span', textContent: '98°', parent: headerContainer, classlist: ['temp'] });
}

Header();
