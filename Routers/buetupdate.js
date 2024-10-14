const express = require("express");
const { autoCommit } = require("oracledb");

const router = express.Router();

const oracle = require("oracledb");

const {getbuetupdate} = require("../Controllers/buetUpdateController");

router.get("/" , getbuetupdate);

router.post("/" , (req,res)=>{
    const givenAction = req.body.action ;

    
    const department_id = req.body.dept_id ;
    const num_seats = req.body.no_of_seats;

    //console.log(department_id , num_seats);
        
    updateDatabase(department_id , num_seats , givenAction);

    res.redirect("/buet/update");
    
});


function updateDatabase(dept_id , no_seats , givenAction){
    //console.log(dept_id,no_seats);
    oracle.getConnection({
        user : "system",
        password : "ayon451133",
        connectString : "localhost:1521/orcl",
    } , (err , con) =>{
        var query = "update departments_buet set total_seats = " + no_seats + ", vacant_seats =" + no_seats + "where department_id =" + dept_id
        var del_query0 = "delete from prereqs_buet where department_id =" + dept_id
        var del_query = "delete from departments_buet where department_id =" + dept_id
        if(givenAction=='update') con.execute(query ,[] , {autoCommit:true} );
        else {
            // var del_query0 = "delete from prereqs_buet where department_id =" + dept_id
            // var del_query = "delete from departments_buet where department_id =" + dept_id
            //con.execute(del_query0,[],{autoCommit:true});
            //con.execute(del_query,[],{autoCommit:true});
        }
    });
}


module.exports = router ;