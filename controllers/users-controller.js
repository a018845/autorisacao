const { getAll, createOne } = require("../service/users-service");

const list = async (req, res, next) => {

    const users = await getAll();
    console.log("data->", users);
    res.json(users);

};

const create = async (req, res, next) => {
    const newUser = await createOne();
    res.json(newUser);
};

module.exports = { list, create };



