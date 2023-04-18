import { getConnection } from "../databases/connection";
import { sql } from "../databases/connection";
import opciones from "../databases/query.usuario";

export const getUsuarios = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(opciones.get);
  // "select * from usuario"
  res.json(result);
  console.log(result);
};

export const getUsuariosbyID = async (req, res) => {
  const { cedula } = req.params;
  const pool = await getConnection();
  console.log(cedula);
  const result = await pool
    .request()
    .input("cedula", sql.Int, parseInt(cedula))
    .query(opciones.getByID);
  // "select * from usuario where cedula = @cedula"

  console.log(result);
  res.send(result);
};

export const postUsuarios = async (req, res) => {
  const {
    cedula,
    nombre,
    telefono,
    direccion,
    email,
    contrasena,
    tipo_usuario,
    estado,
  } = req.body;
  const pool = await getConnection();
  pool
    .request()
    .input("cedula", sql.Int, parseInt(cedula))
    .input("nombre", sql.Char, nombre)
    .input("telefono", sql.VarChar, telefono)
    .input("direccion", sql.VarChar, direccion)
    .input("email", sql.VarChar, email)
    .input("contrasena", sql.Char, contrasena)
    .input("tipo_usuario", sql.Char, tipo_usuario)
    .input("estado", sql.Char, estado)
    .query(opciones.post);
  // "insert into usuario values(@cedula,@nombre,@telefono,@direccion,@email,@contrasena,@tipo_usuario,@estado)"

  console.log(req.body);
  res.send("new user");
};
export const putUsuarios = async (req, res) => {
  const { cedula } = req.params;
  const {
    nombre,
    telefono,
    direccion,
    email,
    contrasena,
    tipo_usuario,
    estado,
  } = req.body;
  const pool = await getConnection();
  pool
    .request()
    .input("cedula", sql.Int, cedula)
    .input("nombre", sql.Char, nombre)
    .input("telefono", sql.VarChar, telefono)
    .input("direccion", sql.VarChar, direccion)
    .input("email", sql.VarChar, email)
    .input("contrasena", sql.Char, contrasena)
    .input("tipo_usuario", sql.Char, tipo_usuario)
    .input("estado", sql.Char, estado)
    .query(opciones.put);
  console.log(opciones.put);
  console.log(req.body);
  res.send("user update");
};
export const deleteUsuarios = async (req, res) => {
  const { cedula } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("cedula", sql.Int, parseInt(cedula))
    .query(opciones.delete);
  res.send("user delete");
};
