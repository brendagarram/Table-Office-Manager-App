import './Table.css';

const Table = ({ vertical, occupied, table, setChair }) => {

  

  function toggleChair(event){
    setChair(event.target.id)
    event.target.classList.toggle("green")
  }

  return (
    <div className={vertical ? "table-v" : "table"}>
      <div onClick={toggleChair} id={`${table}-1`} className={occupied ? "chair-occupied" : "chair"}/>
      <div onClick={toggleChair} id={`${table}-2`} className={occupied ? "chair-occupied" : "chair"}/>
      <div onClick={toggleChair} className="tableSurface"/>
      <div onClick={toggleChair} id={`${table}-3`} className={occupied ? "chair-occupied" : "chair"}/>
      <div onClick={toggleChair} id={`${table}-4`} className={occupied ? "chair-occupied" : "chair"}/>
    </div>
  )
}

export default Table