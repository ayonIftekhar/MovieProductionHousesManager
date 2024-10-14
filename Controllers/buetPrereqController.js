const oracle  = require("oracledb");


function getPrereq(req , res ){

    oracle.getConnection(
        {
            user : "system",
            password : "ayon451133",
            connectString : "localhost:1521/orcl",
        },(err,con)=>{
            if(err) console.log("connection error");
            else{
                var query = "select * FROM prereqs_buet"
                con.execute(
                    query,[],{autoCommit:true},(e,result)=>{
                        if(e) console.log(e);
                        res.render("buetPrereqs" , {prereqs : result.rows});
                        //console.log(result.json());
                    }
                );
            }
        }
    );
}

module.exports = {
    getPrereq,
}