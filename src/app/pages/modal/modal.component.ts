import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(public dialogRef: MatDialogRef<ModalComponent>) {}

  closeModal(): void {
    this.dialogRef.close();
  }
}
