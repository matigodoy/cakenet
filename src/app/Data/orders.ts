import {
  Estados,
  Pedido,
  Producto,
  TipoPago,
  TipoTarjeta,
} from '../Models/models';

export const orders: Pedido[] = [
  {
    id: 1,
    fechaDeseadaEntrega: new Date('2021-01-01'),
    pasteleria: {
      id: 1,
      nombre: 'Pasteleria 1',
      productos: [
        {
          id: 1,
          imagen: 'https://via.placeholder.com/150',
          nombre: 'Producto 1',
          codigo: 1,
          precio: [
            {
              id: 1,
              monto: 100,
              fecha: new Date('2021-01-01'),
            },
          ],
          descripcion: 'Descripcion 1',
          diasPreparacion: 1,
        },
      ],
      direccion: {
        id: 1,
        calle: 'Calle 1',
        altura: 1,
        ciudad: {
          id: 1,
          nombre: 'Ciudad 1',
          provincia: {
            id: 1,
            nombre: 'Provincia 1',
            pais: {
              id: 1,
              nombre: 'Pais 1',
            },
          },
        },
        cp: 'X5001',
      },
      radioEntrega: 1,
      pedidos: [],
    },
    producto: {
      id: 1,
      subtotal: 100,
      producto: {
        id: 1,
        imagen: 'https://via.placeholder.com/150',
        nombre: 'Producto 1',
        codigo: 1,
        precio: [
          {
            id: 1,
            monto: 100,
            fecha: new Date('2021-01-01'),
          },
        ],
        descripcion: 'Descripcion 1',
        diasPreparacion: 1,
      },
    },
    estados: [
      {
        id: 1,
        fecha: new Date('2021-01-01'),
        descripcion: 'Descripcion 1',
        estado: Estados.CREADO,
      },
    ],
    numPedido: 1,
    cliente: {
      id: 1,
      fechaNacimiento: new Date('2021-01-01'),
      nombre: 'Cliente 1',
      apellido: 'Apellido 1',
      direccion: {
        id: 1,
        calle: 'Calle 1',
        altura: 1,
        ciudad: {
          id: 1,
          nombre: 'Ciudad 1',
          provincia: {
            id: 1,
            nombre: 'Provincia 1',
            pais: {
              id: 1,
              nombre: 'Pais 1',
            },
          },
        },
        cp: 'X5001',
      },
    },
    envio: {
      id: 1,
      franjaHorariaDesde: '2021-01-01',
      franjaHorariaHasta: '2021-01-01',
      mail: 'mail@mail.com',
      mensaje: 'Mensaje 1',
      nombre: 'Nombre 1',
      telefono: '123456789',
      direccion: {
        id: 1,
        calle: 'Calle 1',
        altura: 1,
        ciudad: {
          id: 1,
          nombre: 'Ciudad 1',
          provincia: {
            id: 1,
            nombre: 'Provincia 1',
            pais: {
              id: 1,
              nombre: 'Pais 1',
            },
          },
        },
        cp: 'X5001',
      },
    },
    pago: {
      id: 1,
      montoTotal: 100,
      fechaPago: new Date('2021-01-01'),
      tarjeta: {
        id: 1,
        numero: '123456789',
        titular: 'Nombre 1',
        vencimiento: new Date('2021-01-01'),
        codigoSeguridad: '123',
        tipo: TipoTarjeta.VISA,
      },
      entidadBancaria: {
        id: 1,
        nombre: 'Entidad 1',
        porcentajeDescuento: 1,
      },
      estados: [
        {
          id: 1,
          fecha: new Date('2021-01-01'),
          descripcion: 'Descripcion 1',
          tipo: TipoPago.APROBADO,
        },
      ],
    },
  },
];

export const productos: Producto[] = [
  {
    id: 1,
    imagen: 'https://via.placeholder.com/150',
    nombre: 'Producto 1',
    codigo: 1,
    precio: [
      {
        id: 1,
        monto: 100,
        fecha: new Date('2021-01-01'),
      },
    ],
    descripcion: 'Descripcion 1',
    diasPreparacion: 1,
  },
  {
    id: 2,
    imagen: 'https://via.placeholder.com/150',
    nombre: 'Producto 2',
    codigo: 2,
    precio: [
      {
        id: 2,
        monto: 200,
        fecha: new Date('2021-01-01'),
      },
    ],
    descripcion: 'Descripcion 2',
    diasPreparacion: 2,
  },
  {
    id: 3,
    imagen: 'https://via.placeholder.com/150',
    nombre: 'Producto 3',
    codigo: 3,
    precio: [
      {
        id: 3,
        monto: 300,
        fecha: new Date('2021-01-01'),
      },
    ],
    descripcion: 'Descripcion 3',
    diasPreparacion: 3,
  },
  {
    id: 4,
    imagen: 'https://via.placeholder.com/150',
    nombre: 'Producto 4',
    codigo: 4,
    precio: [
      {
        id: 4,
        monto: 400,
        fecha: new Date('2021-01-01'),
      },
    ],
    descripcion: 'Descripcion 4',
    diasPreparacion: 4,
  },
  {
    id: 5,
    imagen: 'https://via.placeholder.com/150',
    nombre: 'Producto 5',
    codigo: 5,
    precio: [
      {
        id: 5,
        monto: 500,
        fecha: new Date('2021-01-01'),
      },
    ],
    descripcion: 'Descripcion 5',
    diasPreparacion: 5,
  },
  {
    id: 6,
    imagen: 'https://via.placeholder.com/150',
    nombre: 'Producto 6',
    codigo: 6,
    precio: [
      {
        id: 6,
        monto: 600,
        fecha: new Date('2021-01-01'),
      },
    ],
    descripcion: 'Descripcion 6',
    diasPreparacion: 6,
  },
  {
    id: 7,
    imagen: 'https://via.placeholder.com/150',
    nombre: 'Producto 7',
    codigo: 7,
    precio: [
      {
        id: 7,
        monto: 700,
        fecha: new Date('2021-01-01'),
      },
    ],
    descripcion: 'Descripcion 7',
    diasPreparacion: 7,
  },
  {
    id: 8,
    imagen: 'https://via.placeholder.com/150',
    nombre: 'Producto 8',
    codigo: 8,
    precio: [
      {
        id: 8,
        monto: 800,
        fecha: new Date('2021-01-01'),
      },
    ],
    descripcion: 'Descripcion 8',
    diasPreparacion: 8,
  },
];
