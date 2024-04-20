import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { Pasteleria } from '../../../../Models/models';
import { pastelerias } from '../../../../Data/orders';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-choose-bakery',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './choose-bakery.component.html',
  styleUrl: './choose-bakery.component.css',
})
export class ChooseBakeryComponent {
  selectedBakery: string | undefined;
  bakeries: Pasteleria[];
  actualLocationForm = this._formBuilder.group({
    pais: new FormControl('', [Validators.required]),
    ciudad: new FormControl('', [Validators.required]),
    codigoPostal: new FormControl('', [Validators.required]),
  });
  bakeryForm = this._formBuilder.group({
    pasteleria: new FormControl('', [Validators.required]),
  });

  @Output() onCancelEvent = new EventEmitter<void>();
  @Output() onChooseBakeryEvent = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder) {
    this.bakeries = pastelerias;
  }

  onChooseBakery() {
    this.onChooseBakeryEvent.emit(this.selectedBakery);
  }

  onCancel() {
    this.onCancelEvent.emit();
  }
}
