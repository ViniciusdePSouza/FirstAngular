import { Component, OnInit, Input } from '@angular/core';

import { Passenger } from '../../modals/passenger.interface'

@Component({
  selector: 'passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.scss']
})
export class PassengerCountComponent implements OnInit {
  @Input()
  items!: Passenger[]

  constructor() { }

  checkedInCount(): number {
    if(!this.items) return 0

    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length
  }

  ngOnInit(): void {
  }

}
