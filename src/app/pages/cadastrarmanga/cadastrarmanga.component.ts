import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model'

@Component({
  selector: 'app-cadastrarmanga',
  templateUrl: './cadastrarmanga.component.html',
  styleUrls: ['./cadastrarmanga.component.css']
})
export class CadastrarMangaComponent implements OnInit {

  form!: FormGroup;
  employee: Employee = { nome: '', autor: '', volume: undefined, qtdpgs: undefined, data: ''};

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      autor: ['', [Validators.required]],
      volume: ['', [Validators.required]],
      qtdpgs: ['', [Validators.required]],
      data: ['', [Validators.required]]
    })
  }

  validarCadastro() {
    this.form.patchValue({
      nome: this.employee.nome,
      autor: this.employee.autor,
      volume: this.employee.volume,
      qtdpgs: this.employee.qtdpgs,
      data: this.employee.data
    });
  }

}