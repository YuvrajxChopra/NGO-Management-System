const oracledb = require("oracledb");

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
async function fun(){
    let comm;
    try{
        comm = await oracledb.getConnection({
            user : "sys",
            password : "yc",
            connectString : "localhost:1521/xe",
            privilege: oracledb.SYSDBA
        });
        console.log("Connection sucessful!!");
        const data = await comm.execute("select * from users_data");
        console.log(data.rows);
    }
    catch(e){
        console.error(e);
    }
}
fun();