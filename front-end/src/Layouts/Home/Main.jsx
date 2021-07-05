import { useState, useEffect, useCallback } from 'react';
import './Main.css';
import Table from "../../Components/Home/Table"
import Office from "../../Components/Home/Office"
import {getReservations} from './queries';
import Reservations from '../../Components/Home/Reservations';

const Home = () => {

  const [reservation, setReservations] = useState([])

  // const makeTable = ({ quantity, vertical }) => {

  // }

 

  useEffect(() => {
    getReservations().then((data) => {
      console.log(data.reservations);
      setReservations(data.reservations)
    })
  }, [])

  const getSeats = () => {
    reservation.reservations.map((seat) => {
      console.log(seat);
      return seat._id
    })
  }

  return <div className="Home">
    
    <Reservations className="" reservations={ reservation } callback={ getChair } />
    <div className="main-floor">

      <div className="lane">
        <Office office="1" />
        <Office office="2" />
      </div>

      <div className="lane">

        <div className="container-left">
          <Table table="a" />
          <Table table="b" />
          <Table table="c" />
          <Table table="d" />
        </div>

        <div className="container-right">
          <Table vertical table="f" />
          <Table vertical table="g" />
          <Table vertical table="h" />
        </div>
      </div>
    </div>
    <div className="second-floor">

      <div className="lane">

        <div className="container-left">
          <Table vertical table="i" />
          <Table vertical table="j" />
          <Table vertical table="k" />
        </div>

        <div className="container-right">
          <Table table="l" />
          <Table table="m" />
          <Table table="n" />
          <Table table="o" />
        </div>
      </div>
    </div>
  </div>
}

export default Home;
