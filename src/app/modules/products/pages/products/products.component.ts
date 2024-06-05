import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../material/material.module';
import { CommonModule } from '@angular/common';
import { Carrito, Producto } from '../../../../Models/models';
import { productos } from '../../../../Data/orders';
import { MatDialog } from '@angular/material/dialog';
import { MakeOrderComponent } from '../../dialog/make-order/make-order.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CartComponent } from '../../dialog/cart/cart.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    SharedModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements AfterViewInit {
  products: Producto[] = [];
  cart: Carrito[] = [];

  // Declare the template for the snackbar "snackbarTemplate"
  @ViewChild('snackBarTemplate') snackBarTemplate!: TemplateRef<any>;

  ngAfterViewInit(): void {}

  constructor(
    public _dialog: MatDialog,
    private _snackbar: MatSnackBar,
    private _router: Router,
    private _bottomSheet: MatBottomSheet
  ) {
    this.products = productos;
    this.getFromLocalStorage();
  }

  onProductCartAddClick(cantidad: number = -1, productId: number) {
    if (cantidad === -1 || cantidad === 0) {
      return;
    }

    const producto = this.products.find((x) => x.id === productId);
    if (!producto) {
      return;
    }

    this.agregarAlCarrito(producto, cantidad);
    this.saveOnLocalStorage();
    this._snackbar.openFromTemplate(this.snackBarTemplate, {
      duration: 3000,
    });
  }

  agregarAlCarrito(producto: Producto, cantidad: number) {
    const index = this.cart.findIndex((x) => x.producto.id === producto.id);
    if (index === -1) {
      this.cart.push({ producto, cantidad });
    } else {
      this.cart[index].cantidad += cantidad;
    }
  }

  // seleccionarProducto(producto: Producto) {
  //   const dialogRef = this._dialog.open(MakeOrderComponent, {
  //     data: {
  //       productoId: producto.id,
  //       cart: this.cart,
  //     },
  //   });

  //   dialogRef.componentInstance.pedido.subscribe((result) => {
  //     this._dialog.closeAll();
  //     this._snackbar.openFromTemplate(this.snackbarTemplate, {
  //       duration: 3000,
  //     });
  //     this._router.navigate(['/orders']);
  //   });
  // }

  openCart() {
    this._bottomSheet.dismiss();
    this._bottomSheet.open(CartComponent);
  }

  saveOnLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getFromLocalStorage() {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.cart = JSON.parse(cart);
    }
  }
}
