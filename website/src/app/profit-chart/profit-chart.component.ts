import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-profit-chart',
  templateUrl: './profit-chart.component.html',
  styleUrl: './profit-chart.component.scss'
})
export class ProfitChartComponent{
  chart: any;

  ngOnInit() {
    this.chart = new Chart('profitChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Profits',
          data: [1000, 1500, 1200, 1700, 1600, 2000],
          borderColor: 'blue',
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
