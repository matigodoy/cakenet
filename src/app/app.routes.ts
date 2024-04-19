import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./modules/orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  // {
  //     path: 'customers',
  //     loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule)
  // },
  // {
  //     path: 'invoices',
  //     loadChildren: () => import('./modules/invoices/invoices.module').then(m => m.InvoicesModule)
  //

  // {
  //     path: 'settings',
  //     loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
  // },
  // {
  //     path: 'user',
  //     loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  // },
  // {
  //     path: 'admin',
  //     loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  // },
  // {
  //     path: '404',
  //     loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)
  // },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];
