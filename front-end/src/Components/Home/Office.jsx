import { useEffect, useState } from 'react';
import './Office.css';

const Office = ({occupiedSeat }) => {
  const chairsByIndex = document.querySelectorAll('.OfficeChair') 
  
  const [chairList, setChairList] = useState([])
  const [occupied, setOccupied] = useState([])

  useEffect(() => {
    setChairList(document.querySelectorAll('.OfficeChair'))
  }, [])


  const getChairIndex = () => {
  }
  getChairIndex()

  return (
    <div className="smallOffice">
      <div className="OfficeChair" onClick={setOccupied} ></div>
      <div className="OfficeTableSurface"></div>
      <div className="OfficeChair"></div>
      
    </div>
  )
}

export default Office
