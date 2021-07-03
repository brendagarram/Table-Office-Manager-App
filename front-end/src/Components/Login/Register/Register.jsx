import React, {useState } from 'react';
import  { Redirect }  from "react-router-dom";
import './Register.css';
import SignIn from './SignIn';
import regist from './regist.png'



const Register = () => {
    const [data, setData] = useState({
        email:"",
        name:"",
        password:"",
    });

    const onChange = ({target}) =>{
        setData((state) => {
            return { ...state, [target.id]: target.value}
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(SignIn(data)){
            window.alert("Usuario registrado con exito");
        }else{
            window.alert("Error al registrar");
        }
            
    }
    
        return (
            <div className="app">
                <div className="wrapper fadeInDown">
                <img src={regist} className="fondoregist" alt="User Icon" />
                <div className = "header2"><h4>Create a new account!</h4></div>
                    <div id="formContent">
                        <div className="fadeIn first">
                            <form onSubmit={onSubmit}>
                                <label className="em">Your e-mail</label><br></br>
                                <input type="text" className="email" placeholder="E-mail" onChange={onChange} value={data.email}></input><br></br>
                                
                                <label className="nm">Name</label><br></br>
                                <input type="text" className="name" placeholder="Ej. John Doe" onChange={onChange} value={data.name}></input><br></br>
                                <label className="inps">Insert your password</label><br></br>
                                <input type="password" className="pass" placeholder="**********" onChange={onChange} value={data.pass}></input><br></br>
                                <label className="cnps ">Confirm your password</label><br></br>
                                <input type="password" className="confirmpass" placeholder="**********" onChange={onChange} value={data.confirmpass}></input><br></br>
                                <input type="submit" className="registalt" value="Registrar" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Register;