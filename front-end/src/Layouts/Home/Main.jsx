import { useState, useEffect, useCallback } from 'react';
import './Main.css';
import Table from "../../Components/Home/Table"
import Office from "../../Components/Home/Office"
import {getReservations} from './queries';
import Reservations from '../../Components/Home/Reservations';

const Home = () => {

  const [reservation, setReservations] = useState([]) // From query: ReservationsAll
  const [chair, setChair] = useState('') // iD of chair to be in focus

  //Make Function to set occupied places at this minute


  useEffect(() => {
    getReservations().then((data) => {
      setReservations(data.reservations)
    })
  }, [])


  return <div className="Home">
    
    <button onClick={ () =>  localStorage.clear() }>Sign Out</button>
    <Reservations className="" reservations={ reservation } chair={ chair } />
    <div className="main-floor">

      <div className="lane">
        <Office setChair={setChair} office="z" />
        <Office setChair={setChair} office="x" />
      </div>

      <div className="lane">

        <div className="container-left">
          <Table setChair={setChair} table="a" />
          <Table setChair={setChair} table="b" />
          <Table setChair={setChair} table="c" />
          <Table setChair={setChair} table="d" />
        </div>

        <div className="container-right">
          <Table setChair={setChair} vertical table="f" />
          <Table setChair={setChair} vertical table="g" />
          <Table setChair={setChair} vertical table="h" />
        </div>
      </div>
    </div>
    <div className="second-floor">

      <div className="lane">

        <div className="container-left">
          <Table setChair={setChair} vertical table="i" />
          <Table setChair={setChair} vertical table="j" />
          <Table setChair={setChair} vertical table="k" />
        </div>

        <div className="container-right">
          <Table setChair={setChair} table="l" />
          <Table setChair={setChair} table="m" />
          <Table setChair={setChair} table="n" />
          <Table setChair={setChair} table="o" />
        </div>
      </div>
    </div>
  </div>
}

export default Home;
