import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
    selector: 'app-confirm-del-dialog',
    template: `
      <h1 mat-dialog-title>Warning</h1>
      <div mat-dialog-content>
        <p>This action cannot be undone, do you wish to continue?</p>
      </div>
      <div mat-dialog-actions>
        <button class="btn-lg btn-outline-danger" mat-button mat-dialog-close="true">Continue</button>
        <button class="btn-lg btn-outline-light" mat-button (click)="onNoClick()" cdkFocusInitial>Cancel</button>
      </div>`
})
export class ConfirmDelDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<ConfirmDelDialogComponent>
    ) {
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
}
