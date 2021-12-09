class Users{
    nombre='Mariano';
    apellido='Estrada';
    email='email.com';
    telefono='12331231';
}

let fullname = () =>{
    return this.nombre + ' ' + this.apellido 
}

module.exports = Users;