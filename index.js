const express = require("express");
const cors = require("cors");
const app = express();
const swaggerUi = require("swagger-ui-express");
const userRoutes = require('./routes/users-route');
const securedRoutes = require('./routes/secured-route');
const auth = require("./controllers/auth-controller");
const swaggerSpec = require("./controllers/swagger-controller")
const config = require("./service/config");
//crear bd teste 
const User = require('./models/user_Models');
const db = require('./database/db');
const sequelize = require("./database/db");
const { createOne } = require("./service/users-service");




app.use(cors());
app.use(express.json());
app.use(auth);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/users', userRoutes);
app.use('/secured', securedRoutes);



//User.sync({ alter: true });//cria ou altera se nao estiver criado a tabela 


// start server
app.listen(config.PORT, function () {
    console.log(`app running on ${config.HOST}:${config.PORT}`);
});







