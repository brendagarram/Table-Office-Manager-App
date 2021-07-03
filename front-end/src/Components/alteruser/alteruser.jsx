
import React, {useState } from 'react';
import  { Redirect }  from "react-router-dom";
import './alteruser.css';
import ConfirmToMail from './conftomail';
import forgpass from './forgpass.png'

const AlterUser = () =>{
    const [data, setData] = useState({
        email:"",
        
    });


const onChange = ({target}) =>{
    setData((state) => {
        return { ...state, [target.id]: target.value}
    })
}

    const onSubmit = (e) =>{
        e.preventDefault();
        if(ConfirmToMail(data)){
            window.alert("An email has been sent to you");
        }else{
            window.alert("Please enter a valid email");
        }
            
    }




    return(
        <div className="app">
                <div className="wrapper fadeInDown">
                <img src={forgpass} className="forgimg" alt="User Icon" />
                <div className = "headeralt"><h4>Forgot your password? Don't Worry</h4></div>
                    <div id="formContent">
                        <div className="fadeIn first">
                            <form onSubmit={onSubmit}>
                                <label className="emps">Your e-mail</label><br></br>
                                <input type="text" className="emailps" placeholder="E-mail" onChange={onChange} value={data.email}></input><br></br>
                                
                                <input type="submit" className="sendemail" value="Send email" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default AlterUser;