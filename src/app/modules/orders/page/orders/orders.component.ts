import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [MaterialModule, SharedModule, CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  nroPedido: number | null = null;

  constructor(private route: Router) {}

  buscarPedido() {
    this.route.navigate(['/orders', this.nroPedido]);
  }
}
