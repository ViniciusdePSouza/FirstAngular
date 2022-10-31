import { Passenger } from './modals/passenger.interface'

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/'
import { map } from 'rxjs/operators';

const PASSENGER_API: string = '/api/passengers'

@Injectable()
export class PassengerDashboardService {
    constructor(private http: HttpClient) {}

    getPassengers(): Observable<Passenger[]> {
        return this.http
        .get(PASSENGER_API)
        .map((response: Response) => response.json())
    }
}