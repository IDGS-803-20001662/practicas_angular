export interface IPedidos{
    "nombre":string,
    "direccion":string,
    "telefono":string,
    "fecha":string,
    "total":number
}

export interface IPizza
{
    "tamanio":string,
    "ingredientes": string[],
    "num":number,
    "subtotal":number
}
