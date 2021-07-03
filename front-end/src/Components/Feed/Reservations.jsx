import { useEffect, useState} from 'react';
import axios from 'axios';

const Reservations = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`${window.location.protocol}//${window.location.hostname}:8000/api/reservations/60ddf50e0eeea41d3cc470ee`);
                setData(() => response);
            }
            catch (error) {
                console.log(error);
            }
        })()
    }, []);


}
console.log(data);

    return(
        <h1>onichan</h1>
    )

export default Reservations;