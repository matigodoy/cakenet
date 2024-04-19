import { Estados, Pedido, TipoPago, TipoTarjeta } from '../Models/models';

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
