import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
    selector: 'app-confirm-del-dialog',
    templateUrl: './delete-confirmation-dialog.component.html',
  styles: [`
    .mat-icon {
      vertical-align: text-bottom;
    }
  `]
})
export class DeleteConfirmationDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>
    ) {
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
}
