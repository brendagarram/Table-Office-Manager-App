import axios from "axios";

const Auth = async (userData) => {
  try{
    const {data} = await axios.post(`${window.location.protocol}//${window.location.hostname}:8000/auth/`,{
          email:userData.email,
          password: userData.password
        })
      window.localStorage.setItem("token", data.token);
      window.localStorage.setItem("user", data);
      window.localStorage.setItem("email", data.email);
      return true
  }
  catch(error) {
    console.log(error);
  }
}

export default Auth;
