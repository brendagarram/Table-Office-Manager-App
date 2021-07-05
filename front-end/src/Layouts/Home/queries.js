import axios from "axios";

const getReservations = async() => {
    try {
        const { data } = await axios.get(`${window.location.protocol}//${window.location.hostname}:8000/reservations/`)
        return (data);
    } catch (error) {
        console.log(error);
    }
}

const deleteReservation = async(id) => {
    try {
        const { data } = await axios.delete(`${window.location.protocol}//${window.location.hostname}:8000/reservations/${id}`)
        return data;
    } catch (error) {
        console.log(error);
    }
}

const createReservation = async({ start, finish, users, seat }) => {
    console.log("params: ", { start, finish, users, seat });
    try {
        const { data } = await axios.post(`${window.location.protocol}//${window.location.hostname}:8000/reservations/`, {
            "Start": new Date(start),
            "Finish": new Date(finish),
            "users": "60e0c85aaf2c283dd99493d2",
            "seat": seat
        })
        return data;
    } catch (error) {
        console.log(error);
    }
}


export { getReservations, deleteReservation, createReservation }