function elementCreator(configObj) {
    const element = document.createElement(configObj.type);
    if (configObj.classlist) element.classList.add([...configObj.classlist]);
    if (configObj.textContent) element.textContent = configObj.textContent;
    if (configObj.parent) configObj.parent.appendChild(element);

    return element;
}
