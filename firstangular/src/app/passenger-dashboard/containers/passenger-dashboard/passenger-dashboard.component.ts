import { Component, OnInit } from '@angular/core'; "@angular/core";

import { Passenger } from '../../modals/passenger.interface'

import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  templateUrl: 'passenger-dashboard.component.html'
})

export class PassengerDashboardComponent implements OnInit {
  i: number = 0

  passengers!: Passenger[]
  
  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit() {
    this.passengerService.getPassengers()
    .subscribe((data: Passenger[] )=> this.passengers = data)
  }

  handleEdit(event: Passenger){
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if(passenger.id === event.id){
        passenger = Object.assign({}, passenger, event)
      }
      return passenger
    })
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter(passenger => passenger.id !== event.id)
  }
}

