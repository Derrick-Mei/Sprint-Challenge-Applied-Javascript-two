function elementConstructor(configObj) {
    const element = document.createElement(configObj.type);
    if (configObj.classlist) element.classlist.add([...configObj.classlist]);
    if (configObj.textContent) element.textContent = configObj.textContent;
    if (configObj.parent) parent.appendChild(element);

    return element;
}
