function customRender(reactElement , mainContainer) {
    // // Your custom rendering logic here
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;

    // domElement.setAttribute('href' , reactElement.props.href);
    // domElement.setAttribute('target' , reactElement.props.target);

    // mainContainer.appendChild(domElement)

    // --------------------------------------------------------------
    // Attributes Size Increses then becomes hectic to manage instaed use For loop

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props) {
        if(prop == "children") continue;
        domElement.setAttribute (prop , reactElement.props[prop])
    } 
    mainContainer.appendChild(domElement);
    return domElement;
}
// Yeh sara kaam React karta hai 

const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google '
}

const mainContainer = document.getElementById('root');

customRender (reactElement , mainContainer);