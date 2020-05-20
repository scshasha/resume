import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import HC_exporting from 'highcharts/modules/exporting';
// HC_exporting(Highcharts);

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  // Highcharts: typeof Highcharts = Highcharts;
  // chartOptions: Highcharts.Options = {
  //   series: [{
  //     data: [1, 2, 3],
  //     type: 'line'
  //   }]
  // };


  constructor() { }

  ngOnInit(): void {
  }

}
