import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../material/material.module';
import { CommonModule } from '@angular/common';
import { Producto } from '../../../../Models/models';
import { productos } from '../../../../Data/orders';
import { MatDialog } from '@angular/material/dialog';
import { MakeOrderComponent } from '../../dialog/make-order/make-order.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SharedModule, MaterialModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Producto[] = [];

  constructor(
    public dialog: MatDialog,
    private _snackbar: MatSnackBar,
    private _router: Router
  ) {
    this.products = productos;
  }

  seleccionarProducto(producto: Producto) {
    const dialogRef = this.dialog.open(MakeOrderComponent, {
      data: { productoId: producto.id },
    });

    dialogRef.componentInstance.pedido.subscribe((result) => {
      this.dialog.closeAll();
      this._snackbar.open('Pedido realizado con éxito');
      this._router.navigate(['/orders']);
    });
  }
}
