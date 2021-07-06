const Reservation = require("../models/reservations");
const blocked = require('./blocked');



const Search = async (date, number)=> {
    try {
        const Forbiden = [];
        const data =await Reservation.find({}).where('date').equals(date).sort({Start:'asc'}).exec();
        data.forEach((element) => {
            console.log(element);
            for(let i=0; i<element.occupied.length; i++){
                Forbiden.push(element.occupied[i])
            }  
        });
        console.log("this is frobiden "+Forbiden);
        const repeated = blocked(Forbiden, number);
        return repeated;
    } catch (error) {
        console.log(error);
    }
}

module.exports = Search;