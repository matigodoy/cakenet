import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Carrito, Pedido } from '../../../../Models/models';
import { MaterialModule } from '../../../material/material.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-make-order',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './make-order.component.html',
  styleUrl: './make-order.component.css',
})
export class MakeOrderComponent {
  constructor(private _formBuilder: FormBuilder) {}

  @Input() productoId: number | null = null;
  @Input() cart: Carrito[] = [];
  @Output() pedido = new EventEmitter<any>();
  // order: Pedido = {
  //       producto: {

  //       }
  // };

  clientFormGroup = this._formBuilder.group({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required]),
  });

  adressFormGroup = this._formBuilder.group({
    nombre: new FormControl('', [Validators.required]),
    franjaHorariaDesde: new FormControl(null, [Validators.required]),
    franjaHorariaHasta: new FormControl(null, [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl(''),
    calle: new FormControl('', [Validators.required]),
    altura: new FormControl('', [Validators.required]),
    ciudad: new FormControl('', [Validators.required]),
    cp: new FormControl('', [Validators.required]),
  });

  paymentFormGroup = this._formBuilder.group({
    titular: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    vencimiento: new FormControl('', [Validators.required]),
    codigoSeguridad: new FormControl('', [Validators.required]),
  });

  ordenar() {
    console.log(
      '🚀 ~ MakeOrderComponent ~ ordernar ~ this.clientFormGroup',
      this.clientFormGroup
    );
    console.log(
      '🚀 ~ MakeOrderComponent ~ ordernar ~ this.adressFormGroup',
      this.adressFormGroup
    );
    console.log(
      '🚀 ~ MakeOrderComponent ~ ordernar ~ this.paymentFormGroup',
      this.paymentFormGroup
    );

    this.pedido.emit({
      ...this.clientFormGroup.value,
      ...this.adressFormGroup.value,
      ...this.paymentFormGroup.value,
    });
  }
}
