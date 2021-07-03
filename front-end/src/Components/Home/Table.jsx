import './Table.css';

const Table = ({ vertical, occupied, number, chairId }) => {

  

  function toggleChair(event){
    console.log(event.target)
    event.target.classList.toggle("green")
  }

  // chairId = number 8, 9, 10 , 11 

  return (
    <div className={vertical ? "table-v" : "table"}>
      <div onClick={toggleChair} className={occupied ? "chair-occupied" : "chair"}/>
      <div onClick={toggleChair} className={occupied ? "chair-occupied" : "chair"}/>
      <div onClick={toggleChair} className="tableSurface"/>
      <div onClick={toggleChair}className={occupied ? "chair-occupied" : "chair"}/>
      <div onClick={toggleChair}className={occupied ? "chair-occupied" : "chair"}/>
    </div>
  )
}

export default Table