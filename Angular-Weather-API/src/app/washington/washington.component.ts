import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
	selector: 'app-washington',
	templateUrl: './washington.component.html',
	styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
	weather: any;  //alternative1 way -- this is blank


	constructor(private _weatherService: WeatherService) {


	}

	ngOnInit() {
		const tempObservable = this._weatherService.getWeather('washington'); //alternative1 way is to do ...this._weatherService.getChicagoWeather();
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
