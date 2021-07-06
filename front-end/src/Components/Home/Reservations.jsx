import { useState } from "react"
import { deleteReservation, createReservation } from "../../Layouts/Home/queries"
import './Reservations.css';


export default function Reservations({ reservations, chair }) {
  

  const [startTime, setStartTime] = useState("")
  const [finishTime, setFinishTime] = useState("")
  const [date, setDate] = useState("")


  const user = window.localStorage.userId

  const ReservationsSchedule = () => {
    return reservations?.map((reservation, index) => {
      return (
        <li key={index}>
          <span>{reservation.seat} </span>
          <span>{new Date(reservation.Start).toLocaleString('es-mx', {weekday:'long'})}</span>
          <span>De: {reservation.Start.match(/\d\d:\d\d/)}</span>
          <span>A: {reservation.Finish.match(/\d\d:\d\d/)}</span>
          <button onClick={() => deleteReservation(reservation._id)} >delete</button>
        </li>
      )
    })
  }

  return (
    <div>
      <ul>
        <ReservationsSchedule />
      </ul>
      <p>Martes 8:00 am a 12pm</p>
      <p>Miercoles 8:00 am a 12pm</p>
      <p>Jueves 8:00 am a 12pm</p>
      <input onChange={(event) => setStartTime(event.target.value)}
        id="date"
        type="time" />
      <input onChange={(event) => setFinishTime(event.target.value)}
        id="start"
        type="time" />
      <input onChange={(event) => setDate(event.target.value)}
        id="finish"
        type="date" />
      <button onClick={() => {
        createReservation({
          start: new Date(`${date}T${startTime}:00`),
          finish: new Date(`${date}T${finishTime}:00`),
          users: user,
          seat: chair
        })
      }}> + </button>
    </div>
  )

}
