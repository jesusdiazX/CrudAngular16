
export interface Rcliente{

    artCienteId:number;
    nombre:string;
    apellidos:string ;
     codigo:string;
    descripcion:string;

}

export interface venta{

    artCienteId:number
    articuloId:number;
    clienteId: number;
     fecha:string;

}