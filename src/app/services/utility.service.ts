import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IResponseApi } from '../utils/types';
import { environment } from '../../environments/environment';
import { mockAPi } from '../utils/mockApi';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
	private baseUrl: string = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';
	private isProd: boolean = environment.production;

  constructor(private http: HttpClient) {
		this.baseUrl += environment.apiKey;
	}

	requestGetNews(): Observable<IResponseApi> {
		if (this.isProd) {
			return of(mockAPi);
		} else {
			return this.http.get<IResponseApi>(this.baseUrl);
		}
	}

}
