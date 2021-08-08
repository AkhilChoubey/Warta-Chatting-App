import React from "react";
import ReactDOM from "react-dom";
//import App from "./Components/App";
import Sent from "./Components/Sent";
import Recieved from "./Components/Recieved";
import Others from "./Components/Others";
import {io} from "../node_modules/socket.io-client";
import audio from "./assets/message.mp3";
const name1 = prompt("Enter your name ");

const socket = io("http://localhost:8000");
const form = document.getElementById("form-container");
const messageInput = document.querySelector(".input-msg");
const messageContainer = document.querySelector(".conversation-container");



const append = (message) => {
   const messageElement = //<Others message={message}/>
    document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('other');
   messageContainer.append(messageElement);

   
   try{
    let a = new Audio(audio);
    a.play();
    }
    catch(err){
        let a = new Audio(audio);
        a.play();
    }   
   
}


const appendSend = (message) => {
    const messageElement = document.createElement('div'); 
   // <Sent message={message}/>
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add('sent');
    messageContainer.append(messageElement);
}

const appendRecieved = (message, name) => {
    //<Recieved message={message} name={name} />
    
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add('received');

    const Name = document.createElement('h1');
    Name.classList.add('person');
    Name.innerText= name;

    const randomColor =((1<<24)*Math.random() | 0).toString(16)
    if(randomColor[0] === "0") randomColor = "800080";
    const color = "#"+randomColor;

    messageElement.innerHTML+=`<h1 class='person' style="color: ${color};" >${name}</h1>
    ${message}`;

    //messageElement.innerText = message;
    messageContainer.append(messageElement);
 
    ////try{
        // new Audio('message.mp3').play().muted=true;
        try{
        let a = new Audio(audio);
        a.play();
        }
        catch(err){
            let a = new Audio(audio);
            a.play();
        }     
        
}


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = messageInput.value;
    appendSend(`${message}`);
    socket.emit('send', message);
    messageInput.value = '';
});

socket.emit("new-user-joined" , name1);

socket.on('user-joined', name1 =>{
    append(`${name1} joined`);
});

socket.on('leave', data =>{
    append(`${data.name1} left`);
});

socket.on('receive', data =>{
    appendRecieved(`${data.message}`,`${data.name1}`);
});



ReactDOM.render( <div></div>
    ,
    document.querySelector(".conversation-container"));