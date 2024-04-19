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
          imagen: 'https://picsum.photos/150',
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
        imagen: 'https://picsum.photos/150',
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
    imagen:
      'https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_fsr8al91ct_confeti-1024x683.jpg.webp',
    nombre: 'Pastel violeta de cumpleaños',
    codigo: 1,
    precio: [
      {
        id: 1,
        monto: 350,
        fecha: new Date('2021-01-01'),
      },
    ],
    descripcion:
      'Este pastel es ideal para cumpleaños de niñas, es muy colorido y delicioso',
    diasPreparacion: 1,
  },
  {
    id: 2,
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgeTt9DfzIf2naa9sz6MC9OqqWU6WmGaoIEHtadv_Xtg&s',
    nombre: 'Pastel nojaio',
    codigo: 2,
    precio: [
      {
        id: 2,
        monto: 200,
        fecha: new Date('2021-01-01'),
      },
    ],
    descripcion:
      'Para los amantes de lo simple, este pastel es ideal para cualquier ocasión',
    diasPreparacion: 2,
  },
  {
    id: 3,
    imagen:
      'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/26/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-9368-1509033057-12.jpg?downsize=900:*&output-format=auto&output-quality=auto',
    nombre: 'Pastel disney',
    codigo: 3,
    precio: [
      {
        id: 3,
        monto: 300,
        fecha: new Date('2021-01-01'),
      },
    ],
    descripcion: 'Este pastel es ideal para cumpleaños de niños',
    diasPreparacion: 3,
  },
  {
    id: 4,
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCYh4GPyVOzSQUM4UvOuq50cGxXLpQeHG14RfpmDCqA&s',
    nombre: 'Veinteañero',
    codigo: 4,
    precio: [
      {
        id: 4,
        monto: 400,
        fecha: new Date('2021-01-01'),
      },
    ],
    descripcion: 'Este pastel es ideal para cumpleaños de veinteañeros',
    diasPreparacion: 4,
  },
  {
    id: 5,
    imagen:
      'https://i.pinimg.com/236x/25/31/43/2531431fb718ba8d24cdd67b497cca4a.jpg',
    nombre: 'Omaeo wa',
    codigo: 5,
    precio: [
      {
        id: 5,
        monto: 500,
        fecha: new Date('2021-01-01'),
      },
    ],
    descripcion: 'Muy rico y dulce, ideal para cualquier ocasión',
    diasPreparacion: 5,
  },
  {
    id: 6,
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYmtDamTAK-TEHnbVX_6kAGT55Tf-dDCBeXP2dV9HeQ&s',
    nombre: 'Drunky Kong',
    codigo: 6,
    precio: [
      {
        id: 6,
        monto: 600,
        fecha: new Date('2021-01-01'),
      },
    ],
    descripcion: 'Ideal para cumpleaños de adultos',
    diasPreparacion: 6,
  },
  {
    id: 7,
    imagen:
      'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/26/16/tmp/buzzfeed-prod-fastlane-01/tmp-name-2-29836-1509049610-5_dblbig.jpg?resize=1200:*',
    nombre: 'Señora de los pasteles',
    codigo: 7,
    precio: [
      {
        id: 7,
        monto: 700,
        fecha: new Date('2021-01-01'),
      },
    ],
    descripcion: 'Ideal para cumpleaños de señoras',
    diasPreparacion: 7,
  },
  {
    id: 8,
    imagen:
      'https://i.pinimg.com/236x/7d/11/66/7d11667a374524bf814a851335d43ec5.jpg',
    nombre: 'Que miedo',
    codigo: 8,
    precio: [
      {
        id: 8,
        monto: 800,
        fecha: new Date('2021-01-01'),
      },
    ],
    descripcion: 'Ideal para cumpleaños de halloween',
    diasPreparacion: 8,
  },
];
