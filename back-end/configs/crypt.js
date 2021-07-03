const bc =require("bcrypt");
const saltRounds = 10;

const Crypt = async (password) => {
     return await bc.hashSync(password, saltRounds);
}

module.exports = { Crypt };
