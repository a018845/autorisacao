// users hardcoded for simplicity, store in a db for production applications
const db = require("../database/db");
const User = require("../models/user_Models");

/*const users = [
    { id: 1, username: 'basicUser', password: 'basicPassword', firstName: 'Basic', lastName: 'User' },
    { id: 2, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }
];*/


async function authenticate({ username, password }) {

    const auth = await User.findOne({
        where: {
            [Op.and]: [
                { username: `${username}` },
                { password: `${password}` }
            ]
        }
    });
    if (auth === null) {
        console.log(auth);
        return false;
    } else {
        console.log('AUTHHHHHHH ->', auth);
        return true;
    }
}

    function getByUsernameAndPassword(username, password) {
        // return new Promise((resolve, reject) => {

        //     db.query(
        //         "SELECT * FROM `user` WHERE username = ? && password = ?",
        //         [username, password],
        //         (err, result) => {
        //             if (err) {
        //                 console.log(err);
        //                 reject();
        //             }
        //             else {
        //                 console.log('Authenticate');
        //                 console.log(result);
        //                 resolve(true);
        //             }
        //         }
        //     );
        // });
    }
    //codigo antigo para criar users.
    // async function createOne() {
    //     const user = await User.create({
    //         username: "admin",
    //         password: "123456",
    //         firstName: "Jane",
    //         lastName: "Doe"
    //     }).then((result) => { console.log(result); })

    //     return "create new user";
    // }
    async function getAll() {
        const users = await User.findAll();
        console.log(users.every(user => user instanceof User));//true
        console.log("All users:", JSON.stringify(users, null, 2));

        return users;
        /*db.query(
            "SELECT * FROM `user`",
            (err, data) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                console.log(data);
                return data;
            }
        )*/

    };
    module.exports = { authenticate, getAll, }; //createOne
