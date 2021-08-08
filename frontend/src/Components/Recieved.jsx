import React from "react";

var randomColor =((1<<24)*Math.random() | 0).toString(16)
    if(randomColor[0] === "0") randomColor = "800080";
    var color = "#"+randomColor;


function Recieved(props){
    return <div className="message received">
            <h1 className="person" style={color = {color}}> {props.name} </h1>
                {props.message} 
        </div>  
    
}

export default Recieved;