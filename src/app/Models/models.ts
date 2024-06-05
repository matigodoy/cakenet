export interface Pais {
  id: number;
  nombre: string;
}

export interface Provincia {
  id: number;
  nombre: string;
  pais: Pais;
}

export interface Ciudad {
  id: number;
  nombre: string;
  provincia: Provincia;
}

export interface Direccion {
  id?: number;
  calle: string;
  altura: number;
  ciudad: Ciudad;
  cp: string;
}

export interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  direccion: Direccion;
  fechaNacimiento: Date;
}

export enum Estados {
  CREADO = 'Creado',
  PAGADO = 'Pagado',
  ENPREPARACIÓN = 'En preparación',
  PREPARADO = 'Preparado',
  ENCAMINO = 'En camino',
  ENTREGADO = 'Entregado',
  CANCELADO = 'Cancelado',
}

export interface EstadoPedido {
  id: number;
  estado: Estados;
  descripcion: string;
  fecha: Date;
}

export interface DetalleEnvio {
  id: number;
  nombre: string;
  franjaHorariaDesde: string;
  franjaHorariaHasta: string;
  telefono: string;
  mail: string;
  mensaje: string;
  direccion: Direccion;
}

export enum TipoPago {
  APROBADO,
  RECHAZADO,
}

export interface EstadoPago {
  id: number;
  tipo: TipoPago;
  descripcion: string;
  fecha: Date;
}

export enum TipoTarjeta {
  VISA,
  MASTERCARD,
  AMERICANEXPRESS,
  CABAL,
  NARANJAX,
}

export interface Tarjeta {
  id: number;
  numero: string;
  titular: string;
  vencimiento: Date;
  tipo: TipoTarjeta;
  codigoSeguridad: string;
}

export interface Pago {
  id: number;
  fechaPago: Date;
  tarjeta: Tarjeta;
  entidadBancaria: EntidadBancaria;
  montoTotal: number;
  estados: EstadoPago[];
}

export interface EntidadBancaria {
  id: number;
  nombre: string;
  porcentajeDescuento: number;
}

export interface Precio {
  id: number;
  monto: number;
  fecha: Date;
}

export interface Producto {
  id: number;
  imagen: string;
  nombre: string;
  codigo: number;
  precio: Precio[];
  descripcion: string;
  cantidad?: number;
  diasPreparacion: number;
}

export interface DetallePedido {
  id: number;
  subtotal: number;
  producto: Producto;
}

export interface Pasteleria {
  id: number;
  nombre: string;
  productos: Producto[];
  direccion: Direccion;
  radioEntrega: number;
  pedidos: Pedido[];
}

export interface Pedido {
  id?: number;
  numPedido: number;
  producto: DetallePedido;
  pasteleria: Pasteleria;
  cliente: Cliente;
  estados: EstadoPedido[];
  envio: DetalleEnvio;
  pago: Pago;
  fechaDeseadaEntrega: Date;
}

export interface Carrito {
  producto: Producto;
  cantidad: number;
}
