import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingProvider } from 'src/app/provides/loading';
import { SystemMessages } from 'src/app/provides/systemMessages';
import { ToastProvider } from 'src/app/provides/toast';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-machine-learning',
  templateUrl: './machine-learning.page.html',
  styleUrls: ['./machine-learning.page.scss'],
})
export class MachineLearningPage implements OnInit {

  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  protected lineChart: any;
  protected tomCoinCotation: Array<any> = [];
  protected timer: Array<string> = [];
  protected valuation: Array<number> = []

  constructor(
    private apiService: ApiServiceService,
    private loadingProvider: LoadingProvider,
    private toasProvider: ToastProvider,
    private systemMessages: SystemMessages,
  ) { }

  ngOnInit() {
    this.getChartDatas()
  }

  getChartDatas() {
    this.loadingProvider.loadingPresent(this.systemMessages.machineLearing);
    this.apiService.machineLearing().subscribe((res: Array<any>) => {
      this.tomCoinCotation = res;

      for (let i = 0; i < this.tomCoinCotation.length; i++) {
        this.timer.push(this.tomCoinCotation[i]['date'])
        this.valuation.push(this.tomCoinCotation[i]['valuation'])
      }
      this.loadingProvider.loadingDismiss();
      this.lineChartMethod();

    }, error => {
      this.loadingProvider.loadingDismiss();
      this.toasProvider.erroToast(this.systemMessages.genericError);
    })
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.timer,
        datasets: [
          {
            label: 'Previsão mes corrente',
            fill: true,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.valuation,
            spanGaps: false,
          }
        ]
      }
    });
  }
}
