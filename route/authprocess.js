const db = require("../models/pgsql");

// Trả về kiểu json
const getUser = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!email) {
        resolve({ status: false, number: 253, mess: "Format Err" });
      } else {
        db.read_db('*', "func_get_user_info_by_email('" + email + "')", '', function (result) {
          if (result.rowCount == 1) {
            resolve(result.rows[0].func_get_user_info_by_email);
          } else {
            resolve({ status: false, number: 254, mess: 'DB Err' });
          }
        });
      }
    } catch (error) {
      resolve({ status: false, number: 255, mess: "System Err" });
    }
  });
};

module.exports = {
  getUser
};
