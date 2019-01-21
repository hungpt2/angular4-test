import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/Rx'; 

@Injectable()
export class DashboardService {

    constructor(
        private http: Http
    ) { }

    key = 'i6kM6hhWP3nRIiZ2k0ZaWqy5BD7d4jxvAYwmLj4f';

    getListImg(date, type) {
        const url = 'https://api.nasa.gov/EPIC/api/' + type + '/date/' + date + '?api_key=' + this.key
        return this.http.get(url).map((response) => {
            return response.json();
        })
    }
}