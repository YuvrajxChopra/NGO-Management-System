const express = require("express");
const cors = require("cors");
const bodypraser = require("body-parser")
const oracledb = require("oracledb");
const { prefetchRows } = require("oracledb");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors());
const parser = bodypraser.urlencoded({ extended: false });
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.autoCommit = true;
app.use(sessions({
	secret: 'key',
	saveUninitilized: true,
	resave: false,
	cookie: { maxAge: 800000 }
}));
app.use(cookieParser());


var statusCheck = "100";
var PreFetchedData = [];
var session = ""



app.post("/signup", parser, (req, res) =>{
  let data = req.body;
  let statusChecker = signupValidation(data);
  if(statusChecker == "959"){
    console.log("Fist name is empty!");
    statusCheck = "959";
    res.redirect("http://localhost:3000/SignInSignUp");
    setTimeout(() => {
      statusCheck = "100"
    }, 10000);
    res.end();
    return;
  }

  else if(statusChecker == "949"){
    console.log("Username is empty!");
    statusCheck = "949";
    res.redirect("http://localhost:3000/SignInSignUp");
    setTimeout(() => {
      statusCheck = "100"
    }, 10000);
    res.end();
    return;
  }
  else if(statusChecker == "939"){
    console.log("Phone number is empty!");
    statusCheck = "939";
    res.redirect("http://localhost:3000/SignInSignUp");
    setTimeout(() => {
      statusCheck = "100"
    }, 10000);
    res.end();
    return;
  }
  else if(statusChecker == "969"){
    console.log("Phone number is not 10 characters long!");
    statusCheck = "969";
    res.redirect("http://localhost:3000/SignInSignUp");
    setTimeout(() => {
      statusCheck = "100"
    }, 10000);
    res.end();
    return;
  }
  else if(statusChecker == "979"){
    console.log("Email is empty!");
    statusCheck = "979";
    res.redirect("http://localhost:3000/SignInSignUp");
    setTimeout(() => {
      statusCheck = "100"
    }, 10000);
    res.end();
    return;
  }
  
else if(statusChecker == "989"){
  console.log("Phone number is not 8 characters long!");
  statusCheck = "989";
  res.redirect("http://localhost:3000/SignInSignUp");
  setTimeout(() => {
    statusCheck = "100"
  }, 10000);
  res.end();
  return;
}

else if(statusChecker == "999"){
  console.log("Username already exist!");
  statusCheck = "999";
  res.redirect("http://localhost:3000/SignInSignUp");
  setTimeout(() => {
    statusCheck = "100"
  }, 10000);
  res.end();
}
else if(statusChecker == "100"){
  console.log(data);
  InsertIntoDatabase(data);
  ConnectionCheck();
  res.redirect("http://localhost:3000/RegisterSucess")
  res.end();
}
})


app.get("/signup_check", (req, res)=>{
  res.setHeader("content-type", "application/json");
  let temp =
    {
      status: statusCheck
    };
  res.send(temp);
});

app.post("/login", parser, (req, res)=>{
  let result = PreFetchedData.filter(entry=>{
    if(entry.USERNAME == req.body.username.trim())
        return true;
  })
  if(result.length != 0 && result[0].USERPASSWORD === req.body.password){
    console.log("Login sucessfull!");
    session  = req.session;
    session.userid =   result[0].USERNAME;
    console.log("login "  +   req.session.userid);
    if(req.body.username === 'admin')
      res.redirect("http://localhost:3000/AdminPage");
    else
      res.redirect("http://localhost:3000/Dashboard");
    res.end();
  }
  else{
    console.log("Wrong Username or Password!");
    statusCheck = "1001";
    res.redirect("http://localhost:3000/SignInSignUp");
    setTimeout(() => {
      statusCheck = "100"
    }, 10000);
    res.end();
  }
})
app.get("/dashboardload", (req, res)=>{
  let temp =
    {
      username: session.userid
    };
  if(session === "")
    temp.username =  "NaN"
  res.setHeader("content-type", "application/json");
  res.send(temp);
})
app.get("/logout", (req, res)=>{
  req.session.destroy();
  session = ""
  res.redirect("http://localhost:3000/SignInSignUp");
})

app.get("/admindashboardload", (req, res)=>{
  let temp =
    {
      username: session.userid
    };
  if(session === "")
    temp.username =  "NaN"
  res.setHeader("content-type", "application/json");
  res.send(temp);
})

app.get("/logout", (req, res)=>{
  req.session.destroy();
  session = ""
  res.redirect("http://localhost:3000/SignInSignUp");
})

function signupValidation(data){
  if(data.first_name.trim() == "")
    return "959";
  else if(data.create_username.trim() == "")
    return "949";
  else if(data.create_phoneno.trim() == "")
    return "939";
  else if(data.create_phoneno.length <10)
    return "969";
  else if(data.create_email.trim() == "")
    return "979";
  else if(data.create_password.length <9)
    return "989";
  else if(UsernameExistCheck(data.create_username.trim()) == true)
    return "999";
  else{
    return "100";
  }
}


async function InsertIntoDatabase(data){
  let comm;
  try{
      comm = await oracledb.getConnection({
          user : "sys",
          password : "yc",
          connectString : "localhost:1521/xe",
          privilege: oracledb.SYSDBA
      });
      let value = "insert into users_data values ('" + data.first_name + "', '" + data.last_name + "', '" + data.create_username + "', '" + data.create_password + "', to_date( '" + data.dob + "' , ('YYYY-MM-DD')), " + data.create_phoneno +")";
      const data_enetered = await comm.execute(value);
      console.log("User registration complete!");
  }
  catch(e){
      console.error(e);
  }
}

function UsernameExistCheck(data){
  let res = PreFetchedData.filter(entry =>{
    console.log(entry.USERNAME);
    if(entry.USERNAME == data)
      return true;
  })
  if (res.length != 0)
    return true;
  else 
    return false;
}


app.listen(3001, () => {
  console.log("Server is running...");
});
async function ConnectionCheck(){
  let comm;
  try{
      comm = await oracledb.getConnection({
          user : "sys",
          password : "yc",
          connectString : "localhost:1521/xe",
          privilege: oracledb.SYSDBA
      });
      console.log("Connected to database...");
      let data = await comm.execute("select * from users_data");
      PreFetchedData = data.rows;
  }
  catch(e){
      console.error(e);
  }
}
ConnectionCheck();


/*
status: 999 
      : Username already exist!
status: 989
      : Password should be 8 character long.
status: 979
      : Email can't be empty!
status: 969
      : Phone number should be 10 character long!
status: 959
      : First name can't be empty!
status: 949
      : Username can't be empty!
status: 939
      : Phone number can't be empty!
*/