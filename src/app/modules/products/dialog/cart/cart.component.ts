import { Component, Input } from '@angular/core';
import { Carrito } from '../../../../Models/models';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../material/material.module';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SharedModule, MaterialModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(
    private _bottomSheet: MatBottomSheet,
    private _router: Router,
    private _snackbar: MatSnackBar
  ) {
    this.getFromLocalStorage();
  }

  cart: Carrito[] = [];

  saveOnLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getFromLocalStorage() {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.cart = JSON.parse(cart);
    }
  }

  onCartCheckoutClick() {
    this.cart = [];
    this.saveOnLocalStorage();

    this._router.navigate(['/orders']);
    this._bottomSheet.dismiss();
    this._snackbar.open('Pedido realizado con éxito', 'Cerrar', {
      duration: 2000,
    });
  }

  onCartClearClick() {
    this.cart = [];
    this.saveOnLocalStorage();
  }

  getTotal() {
    return this.cart.reduce(
      (acc, x) => acc + x.producto.precio[0].monto * x.cantidad,
      0
    );
  }
}
