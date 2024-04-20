import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ChooseBakeryComponent } from '../../dialog/choose-bakery/choose-bakery.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [MaterialModule, SharedModule, CommonModule, RouterModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  nroPedido: number | null = null;

  constructor(
    private route: Router,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  buscarPedido() {
    this.route.navigate(['/orders', this.nroPedido]);
  }

  chooseBakery() {
    const ref = this._dialog.open(ChooseBakeryComponent, {
      width: '600px',
      height: '400px',
    });

    ref.componentInstance.onCancelEvent.subscribe((result) => {
      this._dialog.closeAll();
    });

    ref.componentInstance.onChooseBakeryEvent.subscribe((result) => {
      this.route.navigate(['/products']);
      this._snackBar.open('Pasteleria seleccionada', 'Cerrar', {
        duration: 1000,
      });
      this._dialog.closeAll();
    });
  }
}
