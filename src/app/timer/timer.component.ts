import { formatDate } from '@angular/common';
import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  now:any;
  Days:number= 0;
  tempDays: number = 0;
  hours : number = 0;
  minutes : number = 0;
  tempMinutes : number = 0;
  constructor() {
    setInterval(() => {
      this.now =  new Date().getTime() - new Date("08/17/2020").getTime();
      this.tempDays = this.now / (1000 * 3600 * 24);
      this.Days = this.tempDays - this.tempDays % 1;
      this.hours = Math.floor((this.tempDays - this.Days)*(1000) / 60);
      this.minutes = Math.floor((((this.tempDays - this.Days)*(1000) / 60) - Math.floor((this.tempDays - this.Days)*(1000) / 60))* 1000 / 60);
    }, 1);
}

  ngOnInit(): void {
  }

}
