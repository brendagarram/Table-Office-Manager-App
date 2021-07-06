import { useEffect, useState } from 'react';
import './Office.css';

const Office = ({ occupied, office, setChair }) => {
  
  function toggleChair(event){
    document.querySelectorAll('.OfficeChair, .chair, .OfficeTableSurface').forEach((e) => {e.classList.remove('green')})
    setChair(event.target.id)
    event.target.classList.toggle("green")
  }

  return (
     <div className="smallOffice">
      <div onClick={toggleChair} id={`${office}-1`} className="OfficeChair" >{`${office}-1`}</div>
      <div onClick={toggleChair} id={`${office}-0`} className="OfficeTableSurface">{`${office}`}</div>
      <div onClick={toggleChair} id={`${office}-2`} className="OfficeChair">{`${office}-2`}</div>
      
    </div>
  )
}

export default Office
