const Client = require('pg').Pool;

const database = new Client({
    host: "118.69.62.190",
    port: 5433,
    user: "dat_master",
    password: "abc123",
    database: "dev",
    //ssl: { rejectUnauthorized: false }
});
database.connect();

function read_db(select, table, value_db, Callback) {
    if (value_db != "") {
        database.query("select " + select + " from " + table + " where " + value_db, function (err, result) {
            Callback(result);
        });
    } else {
        database.query("select " + select + " from " + table, function (err, result) {
            //console.log(err,result);
            Callback(result);
        });
    }
}

module.exports = {
    read_db
}
