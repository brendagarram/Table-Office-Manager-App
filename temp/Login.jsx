import React, { useState } from 'react';
import './Login.css';
import Auth from '../../services/Auth';
import  { Redirect, useHistory}  from "react-router-dom";
import isAuthenticated from "../../services/IsAuthenticated";
import logo from "./logo.png"
// import abel from "./abel.ttf"


const Login = () => {
    let auth = isAuthenticated();
    let history = useHistory();
    
    const [data, setData] = useState({
        username:"",
        password:""
    });

    const onChange = ({target}) =>{
        setData((state) => {
            return { ...state, [target.id]: target.value}
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        Auth(data);
        f1()
        auth = isAuthenticated();
        if(auth)
            history.push("/inicio");
            
    }

    function resolveAfter2Seconds(x) {
        return new Promise(resolve => {
          setTimeout(() => {
              window.location.reload();
            resolve(x);
          }, 1000);
        });
      }

    async function f1() {
        await resolveAfter2Seconds(15);
      }

    
    if(auth === false){
        return (
            
                <div className="wrapper fadeInDown">

                    <div className = "header"><h3>Welcome to Table Office Manager</h3></div>
                    <div id="formContent">

                        <div className="fadeIn first">
                            <img src={logo} className="w3-round" alt="User Icon" />
                        </div>

                    
                        <form onSubmit={onSubmit}>
                            <input type="text" className="fadeIn second" id="username" placeholder="User"
                             onChange={onChange} value={data.username}/>
                            <input type="password" className="fadeIn third" id="password" placeholder="Password"
                             onChange={onChange} value={data.password}/>
                            <input type="submit" className="fadeIn fourth" value="Log In" />
                        </form>
                        
                        <div id="formFooter">
                            <a className="underlineHover" href="http://localhost:3000/registrarse">Registrarse</a>
                            <br></br>
                            <a className="underlineHover" href="#">¿Olvidó la contraseña?</a>
                        </div>

                    </div>
                </div>
        );
    }else {
        return (
            <Redirect to="/inicio"/>
        )
    }
}

export default Login;