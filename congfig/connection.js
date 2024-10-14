const oracle  = require("oracledb");

var connectionString = "(DESCRIPTION=(LOAD_BALANCE= ON)(FAILOVER = ON )(ADDRESS = (PROTOCOL = TCP )(HOST=localhost)(PORT=1521))(CONNECT_DATA =(SID = ORCL)))";

const connection = oracle.getConnection({
    user : "system",
    password : "ayon451133",
    connectString : "localhost:1521/orcl",
},(err,con)=>{
    if(err) console.log("connection error");
    else{
        var query = "select * FROM testTable"
        con.execute(query,[],{autoCommit:true},(e,res)=>{
            if(e) console.log(e);
            console.log(res.rows);
        });
    }
});







