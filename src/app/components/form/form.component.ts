import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    documento: new FormControl('', [Validators.required, Validators.minLength(8)]),
    contrasena: new FormControl(''),

  });

  constructor() { }

  ngOnInit(): void {
  }
  mande() {
    console.log(this.formulario.value)
  }

}
