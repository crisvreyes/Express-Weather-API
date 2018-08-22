import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})

export class DallasComponent implements OnInit {
  weather : any;  //alternative1 way -- this is blank


constructor(private _weatherService : WeatherService) {


 }

ngOnInit() {
    const tempObservable = this._weatherService.getWeather('dallas'); //alternative1 way is to do ...this._weatherService.getChicagoWeather();
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
