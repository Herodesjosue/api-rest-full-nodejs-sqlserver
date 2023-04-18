import sql from "mssql";

// "port 1433"
const dbSettings = {
  user: "herodes",
  password: "1234",
  server: "localhost",
  database: "INMOBILIARIADYV",
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export const getConnection = async () => {
  const pool = await sql.connect(dbSettings);
  return pool;
  // const result = await pool.request().query("select * from usuario")
  // console.log(result)
};

getConnection();
export {sql}
