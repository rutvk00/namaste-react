import React from 'react';
import ReactDOM from 'react-dom/client'; 


const parent = React.createElement("div" , {id : "parent"} ,
    [
        React.createElement("div" , {id : "child1"} , 
        [React.createElement("h1" , {} , "Nested H1 Tag!"),
            React.createElement("h2" , {} , "Nested H2 Tag! (Sibling of H1 Tag)")
        ]),
        React.createElement("div" , {id : "child2"} , 
            [React.createElement("h1" , {} , "Nested H1 Tag!"),
                React.createElement("h2" , {} , "Nested H2 Tag! (Sibling of H1 Tag)")
            ])
    ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);




// const heading = React.createElement("h1" , {id : "heading"} , "Hello World From React!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


/*
 Library - lite weight , we can use it for part of application , not compulsory to create application using this. (React)
 Framework - heavy weight package ,  we have to create application using the framework's rules and regulation. we have to use framework's standard for developing application. (Next Js)

*/

//JSX - HTML like syntax or XML like syntax

const root = ReactDOM.createRoot(document.getElementById("root"));

const jsxHeading = (
    <h1 className='head' id="heading">
        Namaste React using JSX !!
    </h1>
);
root.render(jsxHeading)
console.log("jsxHeading : " , jsxHeading)