import axios from "axios";



const SignIn = async (userData) => {
        try{
          const {data} = await axios.post(`${window.location.protocol}//${window.location.hostname}:8000/users/`,{
                email:userData.email,
                name:userData.name,
                password: userData.password,
              })
              return(true);
        }
        catch(error) {
          console.log(error);
        }
}
export default SignIn;