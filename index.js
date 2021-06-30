const express = require("express");
const cors = require('cors');
const dataService = require("./services/dataservice");
const app = express();
app.use(cors({
  origin:'http://localhost:3000',
  credentials:true   //to get cookies
}))



app.use(express.json());

app.post("/", (req, res) => {
  
  const result =dataService.register(
    req.body.companyName,
    req.body.personName,
    req.body.personPhoneNumber,
    req.body.personEmailId
  )
  
  console.log(res.status(result.statusCode).json(result));
});


app.post("/login", (req, res) => {
 
  const result = dataService.login(
    req.body.personName,
    req.body.personPhoneNumber
  )
  // console.log(res.json(result))

  console.log(res.status(result.statusCode).json(result));
});

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
