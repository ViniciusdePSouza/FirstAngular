import { Component, OnInit } from '@angular/core'; "@angular/core";

import { Passenger } from '../../modals/passenger.interface'

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  templateUrl: 'passenger-dashboard.component.html'
})

export class PassengerDashboardComponent implements OnInit {
  i: number = 0

  passengers!: Passenger[]

  constructor() { }

  ngOnInit() {
    this.passengers = [{
      id: 1,
      fullName: "Stephen",
      checkedIn: true,
      checkedInDate: 140742000000,
      children: null
    },

    {
      id: 2,
      fullName: "Rose",
      checkedIn: false,
      checkedInDate: null,
      children: [{ name: 'Ted', age: 12 }, { name: 'Chole', age: 17 }]
    },

    {
      id: 3,
      fullName: "James",
      checkedIn: true,
      checkedInDate: 140742000000,
      children: null
    },

    {
      id: 4,
      fullName: "Louise",
      checkedIn: true,
      checkedInDate: 140742000000,
      children: [{ name: 'Jessica', age: 1 }]
    },

    {
      id: 5,
      fullName: "Tina",
      checkedIn: false,
      checkedInDate: null,
      children: null
    },
    ]
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

