function elementCreator(a, b) {
    elem = document.createElement(a);
    elem.append("hi there")
    elem.style.backgroundColor = b;
    document.body.append(elem);
}
elementCreator("div", "blue");
elementCreator("span", "green");