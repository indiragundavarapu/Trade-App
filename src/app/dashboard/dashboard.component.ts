import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  searchTerm: string = '';
  sortColumn: string = '';
  sortAsc: boolean = true;

  constructor(private router: Router) {}

  portfolioData = [
    { ticker: 'Bitcoin', quantity: 1, value: 25000, performance: '50%'},
    { ticker: 'Ethereum', quantity: 2, value: 1800, performance: '80%'},
    { ticker: 'Cardano', quantity: 3, value: 0.3 , performance: '20%'},
    { ticker: 'Solana', quantity: 4 , value: 21 , performance: '90%'},
  ];

  get filteredData() {
    let data = [...this.portfolioData];

    if (this.searchTerm) {
      data = data.filter(item =>
        item.ticker.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.sortColumn) {
      data.sort((a, b) => {
        let valA =(a as any)[this.sortColumn];
        let valB = (b as any)[this.sortColumn];

        if (this.sortColumn === 'performance') {
          valA = parseFloat(valA.replace('%', ''));
          valB = parseFloat(valB.replace('%', ''));
        }
        return this.sortAsc ? valA - valB : valB - valA;
      });
    }

    return data;
  }

  sortBy(column: string) {
    if (this.sortColumn === column) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortColumn = column;
      this.sortAsc = true;
    }
  }
  tradeForm(){
    console.log('ckiksd')
    this.router.navigate(['/tradeForm']);
  }
}
