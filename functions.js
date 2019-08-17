function elementCreator(configObj) {
    const element = document.createElement(configObj.type);
    if (configObj.classList) element.classList.add(...configObj.classList);
    if (configObj.textContent) element.textContent = configObj.textContent;
    if (configObj.parent) configObj.parent.appendChild(element);
    if (configObj.attributes) {
        configObj.attributes.forEach(attribute => {
            element[attribute[0]] = attribute[1];
        })
    }
    return element;
}
