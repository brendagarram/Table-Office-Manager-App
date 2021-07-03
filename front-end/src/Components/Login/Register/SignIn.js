import axios from "axios";



const SignIn = async (userData) => {
        try{
          const {data} = await axios.post(`${window.location.protocol}//${window.location.hostname}:8000/api/users/`,{
                email:userData.email,
                username:userData.username,
                name:userData.name,
                password: userData.password,
                cel:userData.cel
              })
              return(true);
        }
        catch(error) {
          console.log(error);
        }
}
export default SignIn;