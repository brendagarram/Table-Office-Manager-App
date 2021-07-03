import './Home.css';
import Table from "../../Components/Home/Table"
import Office from "../../Components/Home/Office"

const Home = () => {

  return <div className="Home">

    <div className="main-floor">

      <div className="lane">
        <Office />
        <Office />
      </div>

      <div className="lane">

        <div className="container-left">
          <Table number={2}/>
          <Table number={3}/>
          <Table number={4}/>
          <Table number={5}/>
        </div>

        <div className="container-right">
          <Table vertical />
          <Table vertical />
          <Table vertical />
        </div>
      </div>
    </div>
    <div className="second-floor">

      <div className="lane">

        <div className="container-left">
          <Table vertical/>
          <Table vertical/>
          <Table vertical/>
        </div>

        <div className="container-right">
          <Table/>
          <Table/>
          <Table/>
          <Table/>
        </div>
      </div>

    </div>
  </div>
}

export default Home;
