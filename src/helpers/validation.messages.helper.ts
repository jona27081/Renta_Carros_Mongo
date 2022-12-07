

export enum ValidationMessages{
    //Globales
    INFORMACION_NO_ENCONTRADA = "La informacion no ha sido localizada, verifique!!!",
    ES_CADENA = "El campo $property debe ser una cadena. Nombre de la propiedad: ",
    ES_NUMERO = "El campo $property debe ser un numero. Nombre de la propiedad:",
    TAMAÑO_CADENA = "El campo $property debe cumplir con la siguientes condiciones: Tamaño min $",
    ES_EMAIL = "El campo $property debe ser un formato de correo electronivo, verifique!!!",
    NUMERO_DEMASIADO_GRANDE = "El numero ingresado rebasa los 10 digitos permitidos para este campo",
    INFORMACION_INCORRECTA = "La informacion proporcionada no es correcta, verifiques!!!",
    //Clientes
    CLIENTE_NO_ENCONTRADO = "El cliente no ha sido localizado",
    //Distribuidores
    DISTRIBUIDOR_NO_REGISTRADO = "El distribuidor no ha sido dado de alta en el sistema",
    //Carros
    CARRO_NO_REGISTRADO = "Este carro no se encuentran registrado en el sistema",
    PLACAS_NO_REGISTRADAS = "Las placas a las que se hacen mencion no se encuentran registradas en el sistema",
    //Registros
    REGISTRO_NO_ENCONTRADO = "El registro que esta solicitando no ha sido localizao",
    FOLIO_INVALIDO = "El folio proporcionado no se encuentra en la base de datos", 
}