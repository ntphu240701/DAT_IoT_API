const db = require("../models/pgsql");

//Tra ve kiểu table
const getWarn = (usr, partnerid, type) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!usr || !partnerid || !type) {
                resolve({ status: false, number: 253, mess: "Format Err" });
            } else {
                db.read_db('*', "func_getwarn('" + usr + "','" + partnerid + "','" + type + "')", '', function (result) {
                    if (result.rowCount >= 1) {
                        resolve({ status: true, data: result.rows });
                    } else {
                        resolve({ status: false, number: 254, mess: "DB Err" });
                    }
                });
            }
        } catch (error) {
            resolve({ status: false, number: 255, mess: "System Err" });
        }
    });
}

module.exports = {

};