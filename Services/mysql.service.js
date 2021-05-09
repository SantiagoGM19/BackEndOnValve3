var mysql = require('mysql');

const execute = async (sql) => {
   var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'onvalve',
      port: 3306
   });
   await connection.connect(function(error){
      if(error){
         throw error;
      }else{
         console.log('Conexion correcta.');
      }
   });
   const res = await connection.query(sql, function(err, result, fields){
      if(err) throw err;
      resultado = result;
   });
   await connection.end();
   return res;
}

module.exports = {execute}