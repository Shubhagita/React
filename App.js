const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Hello H1 Tag"),
        React.createElement("h2",{},"Hello H2 Tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Hello H1-2 Tag"),
        React.createElement("h2",{},"Hello H2-2 Tag"),
    ]),
]

);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);