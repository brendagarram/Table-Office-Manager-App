import axios from "axios";

const Auth = async (userData) => {
  try{
    const {data} = await axios.post(`${window.location.protocol}//${window.location.hostname}:8000/auth/`,{
      email:userData.email,
      password: userData.password
    })
    
      console.log(data.user);
      window.localStorage.setItem("token", data.token);
      window.localStorage.setItem("userId", data.user._id);
      window.localStorage.setItem("userEmail", data.user.email);
      return true
  }
  catch(error) {
    console.log(error);
  }
}

export default Auth;
