import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalComponent } from './../modal/modal.component'; 
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {

  }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      lgpd: ['', [Validators.requiredTrue]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

}
