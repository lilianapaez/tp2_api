import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  title = 'Ranking de las mejores vendedoras';
   type = 'PieChart';
   data = [
      ['Veronica', 45.0],
      ['Vanesa', 26.8],
      ['Lusiana', 12.8],
      ['carolina', 8.5],
      ['Liliana', 6.2],
      ['Ofelia', 0.7]
   ];
   columnNames = ['Browser', 'Percentage'];
   options = {
   };
   width = 550;
   height = 400;
  constructor() { }

  ngOnInit() {
  }

}
