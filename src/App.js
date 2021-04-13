import React from "react";

const viewHeight = 500;
const viewWidth = 500;


const App = () => {
    return (
    <svg style={{border: "1px solid pink", width: viewWidth, height: viewHeight}}>
        <circle cx={20} cy={20} r="5" />
        <rect x="200" y="200" width="10" height="10" />
        <line x1={0} y1={viewHeight} x2={150} y2={100} stroke="black" />
    </svg>
    );
}


export default App;