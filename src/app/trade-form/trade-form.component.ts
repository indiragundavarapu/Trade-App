import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-trade-form',
  standalone: true,
  imports: [CommonModule,FormsModule,MatSnackBarModule],
  templateUrl: './trade-form.component.html',
  styleUrl: './trade-form.component.css'
})
export class TradeFormComponent {
  ticker: string = '';
  type: string = '';
  quantity: number | null = null;
  submitted: boolean = false;

  constructor(private snackBar: MatSnackBar) {}
  onSubmit() {
    this.submitted = true;
  
    if (!this.ticker || !this.quantity || !this.type) {
      this.snackBar.open('Please fill in all required fields.', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: ['snackbar-error']
      });
      return;
    }
  
    console.log('Trade Submitted:', {
      ticker: this.ticker,
      quantity: this.quantity,
      type: this.type
    });
  
    this.snackBar.open('Trade submitted successfully!', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snackbar-success']
    });
  }
  
}
