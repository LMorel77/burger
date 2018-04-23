// Importing mySQL node package
var mySql = require('mysql');
var sqlCxn;

// SQL database connection info
if (process.env.JAWSDB_URL) {
    sqlCxn = mySql.createConnection(process.env.JAWSDB_URL);
}
else {

    sqlCxn = mySql.createConnection({

        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burgers_db'

    });

}

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