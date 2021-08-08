import React from "react";
import Sent from "Sent";
import Recieved from "Recieved";
import Others from "Others";


    




function App(){
    return [
         <div>
        <div class="status-bar">
        <h2>Warta  App</h2>
        <p class="copyright">Copyright @ Akhil Choubey</p>
    </div>
    <div class="chat"> 
            <div class="chat-container">
                <div class="conversation">
                    <div class="conversation-container">
                    

                    </div>  
                <form id="form-container" >
                    <input class="input-msg" name="input" placeholder="Type a message" autocomplete="off" autofocus></input>
                    <button class="send" type="submit">
                        <div class="circle">
                             <span class="iconify" data-icon="zmdi:mail-send"></span>
                        </div>
                    </button>
                </form>
            </div>        
        </div>
    </div> 
        
    </div>
    ]
}

export default App;