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
          <span>{new Date(reservation.Start).toLocaleString('es-mx', { weekday: 'long' })}</span>
          <span>De: {reservation.Start.match(/\d\d:\d\d/)}</span>
          <span>A: {reservation.Finish.match(/\d\d:\d\d/)}</span>
          <button onClick={() => deleteReservation(reservation._id)}>delete</button>
        </li>
      )
    })
  }

  return (
    <div className="reservations">
      <div className="createNew">
        <h3>New Reservation</h3>
        <p>Select desired seat</p>
        <h3>Selected Seat: <span>{chair}</span></h3>
        <label htmlFor="date">From</label>
        <input onChange={(event) => setStartTime(event.target.value)}
          id="date"
          type="time" />
          <label htmlFor="start">Until</label>
        <input onChange={(event) => setFinishTime(event.target.value)}
          id="start"
          type="time" />
        <label htmlFor="date">On day</label>
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
      <ul className="schedule">
        <h3>Current Reservations</h3>
        <ReservationsSchedule />
      </ul>
    </div>
  )

}
