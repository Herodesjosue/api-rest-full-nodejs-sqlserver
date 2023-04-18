export default  {
  get: "select * from usuario",
  getByID: "select * from usuario where cedula = @cedula",
  post: "insert into usuario values(@cedula,@nombre,@telefono,@direccion,@email,@contrasena,@tipo_usuario,@estado)",
  put: "update usuario set nombre = @nombre, telefono = @telefono,direccion = @direccion,email = @email,contrasena = @contrasena,tipo_usuario = @tipo_usuario,estado = @estado  WHERE cedula = @cedula",
  delete: "delete from usuario where cedula = @cedula",

};
