import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public chart: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.createChartBar()
    this.createChartLine()
    this.createChartPie2()
  }

  createChartBar() {
    this.chart = new Chart("chartBar", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['01-2024', '02-2024', '03-2024', '04-2024'],
        datasets: [
          {
            label: "Renda Bruta",
            data: ['3000', '5430', '5722', '3287'],
            backgroundColor: 'turquoise',
            borderWidth: 3,
            borderColor: '#40B6DD',

          },
          {
            label: "Renda Líquida",
            data: ['1950', '2980', '3082', '1112'],
            backgroundColor: '#ff0676',
            borderWidth: 3,
            borderColor: '#EA0057',
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

  createChartLine() {
    this.chart = new Chart("chartLine", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['01-2024', '02-2024', '03-2024', '04-2024'],
        datasets: [
          {
            label: "Dark Boy",
            data: ['467', '576', '572', '790'],
            backgroundColor: 'blue'
          },
          {
            label: "Potirá",
            data: ['542', '542', '536', '640'],
            backgroundColor: 'limegreen'
          },
          {
            label: "Japanese Classics Colction",
            data: ['402', '500', '490', '510'],
            backgroundColor: '#EA0057'
          },
          {
            label: "DonDonRonDon",
            data: ['350', '542', '536', '609'],
            backgroundColor: 'turquoise'
          },
          {
            label: "A Lenda de Shin Qui Han-Dô",
            data: ['530', '580', '450', '389'],
            backgroundColor: 'purple'
          },
        ]
      },
      options: {
        aspectRatio: 5
      }

    });
  }

  createChartPie2() {
    this.chart = new Chart("chartPie2", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Ação', 'Aventura', 'Fantasia', 'Seinen', 'Shounen', 'Comédia', 'Dark', 'Shoujo'],
        datasets: [
          {
            data: ['467', '776', '772', '300', '900', '234', '356', '215'],
            backgroundColor: ['blue', 'green', 'purple', 'grey', 'turquoise', 'yellow', 'black', '#ff0676'],
            borderWidth: 3,
          },
        ]
      },
      options: {
        aspectRatio: 3,
      }

    });
  }

}
