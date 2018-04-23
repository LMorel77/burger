// Importing mySQL node package
var mySql = require('mysql');

// SQL database connection info
var sqlCxn = mySql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db'

});

// Connecting to SQL server and database
sqlCxn.connect(function (error) {

    if (error) {
        console.error("error connecting to mySql: " + error.stack);
        return;
    };
    console.log("Connected to mySql with id " + sqlCxn.threadId);

})

// Exporting SQL connection settings
module.exports = sqlCxn;