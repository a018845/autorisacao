const basicAuth=require("basic-auth");
const { authenticate, getAll } =require("../service/users-service");


async function auth (req, res, next) {
    var user = basicAuth(req);
    console.log(user);
    if (!user || !user.name || !user.pass) {
        res.set("WWW-Authenticate", "Basic realm=Authorization Required");
        res.sendStatus(401);
        return;
    }                   //VALIDAR LINHA 10 COM O USER-SERVICES
    // if (user.name === "basicUser" && user.pass === "basicPassword") {
    if (await authenticate({username: user.name, password: user.pass})) {
        console.log('passei');
        next();
    } else {
        res.set("WWW-Authenticate", "Basic realm=Authorization Required");
        res.sendStatus(401);
        console.log('fiquei');
        return;
    }
    

};
/*user.name === "basicUser" && user.pass === "basicPassword"
authenticate*/
module.exports = auth;