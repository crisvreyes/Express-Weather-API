import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})

export class SanJoseComponent implements OnInit {
  weather : any;  //alternative1 way -- this is blank


constructor(private _weatherService : WeatherService) {


 }

ngOnInit() {
    const tempObservable = this._weatherService.getWeather('emeryville'); //alternative1 way is to do ...this._weatherService.getChicagoWeather();
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
