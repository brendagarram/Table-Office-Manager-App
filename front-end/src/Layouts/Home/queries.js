import axios from "axios";
const userToken = localStorage.getItem('token');

const getReservations = async() => {
    try {
        const { data } = await axios.get(`${window.location.protocol}//${window.location.hostname}:8000/reservations/`, { headers: { Authorization: `Bearer ${userToken}` } })
        return (data);
    } catch (error) {
        console.log(error);
    }
}

const deleteReservation = async(id) => {
    try {
        const { data } = await axios.delete(`${window.location.protocol}//${window.location.hostname}:8000/reservations/${id}`, { headers: { Authorization: `Bearer ${userToken}` } })
        return data;
    } catch (error) {
        console.log(error);
    }
}

const createReservation = async({ start, finish, users, seat }) => {
    try {
        const { data } = await axios.post(`${window.location.protocol}//${window.location.hostname}:8000/reservations/`,
         {
            "Start": new Date(start),
            "Finish": new Date(finish),
            "users": users,
            "seat": seat
        }, { headers: { Authorization: `Bearer ${userToken}` } })
        return data;
    } catch (error) {
        console.log(error);
    }
}


export { getReservations, deleteReservation, createReservation }