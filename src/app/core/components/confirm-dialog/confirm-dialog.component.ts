import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface InputData {
  title: string;
  description: string | string[];
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  title: InputData['title'];
  description: InputData['description'];

  constructor(
    @Inject(MAT_DIALOG_DATA) data: InputData,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {
    this.title = data?.title || 'Are you sure?';
    this.description =
      data?.description || 'You are not going to be able to undo this action';
  }

  ngOnInit(): void {}

  accept(): void {
    this.dialogRef.close(true);
  }

  close(): void {
    this.dialogRef.close(false);
  }
}
