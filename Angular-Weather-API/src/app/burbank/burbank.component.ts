import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})

export class BurbankComponent implements OnInit {
    weather : any;  //alternative1 way -- this is blank


  constructor(private _weatherService : WeatherService) {


   }

  ngOnInit() {
      const tempObservable = this._weatherService.getWeather("burbank"); //alternative1 way is to do ...this._weatherService.getChicagoWeather();
      tempObservable.subscribe(
          (weather) => {
              console.log('Success: ', weather)
              this.weather = weather;
          },
          (err) => {
              console.log('Error: ', err);
          }
      );
  }

}
