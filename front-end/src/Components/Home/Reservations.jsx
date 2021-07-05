import { useState } from "react"
import { deleteReservation, createReservation } from "../../Layouts/Home/queries"

export default function Reservations({ reservations }) {

  const [startTime, setStartTime] = useState("")
  const [finishTime, setFinishTime] = useState("")
  const [date, setDate] = useState("")
  const [seat, setSeat] = useState("") // This is a temporary state/ dev use only


  const user = window.localStorage.getItem("email")



  const ReservationsSchedule = () => {
    return reservations?.map((reservation, index) => {
      return (
        <li key={index}>
          {console.log(reservation)}
          <span>{reservation.seat} </span>
          <span>{new Date(reservation.Start).getDay()} </span>
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
      <input onChange={(event) => setSeat(event.target.value)}
        id="seat"
        type="text" />
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
          users: "60e0c85aaf2c283dd99493d2",
          seat: seat
        })
      }}> + </button>
    </div>
  )
  // TODO:
  // DONE fetch reservations DONE 
  // DONE updatestate from inputs with use effect 
  // POST True / Done from inputs
  
  // toggle: on click + ( ) => display calendar input 
}
