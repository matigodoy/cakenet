import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [MaterialModule, SharedModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {}
