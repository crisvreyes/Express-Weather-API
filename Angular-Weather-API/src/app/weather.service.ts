import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  urlcity : any;
  urlapi : any;
  city : any;
  //alternative1 way of doing this is to leave export empty



    constructor(private _http: HttpClient) {
        this.urlcity = 'http://api.openweathermap.org/data/2.5/weather?q=';
        this.urlapi = '&apikey=7f0dbb0e1ebacc8b04a8fdc57884d5af&units=imperial';
        //alternative1 way is to leave this empty

    }

     

    getWeather(city) {
        console.log('GOT YOUR WEATHER RIGHT HERE!!!')
        return this._http.get(
          this.urlcity + city + this.urlapi)
        //alternative1 way is ---   return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Burbank&apikey=7f0dbb0e1ebacc8b04a8fdc57884d5af')  
    }
}
