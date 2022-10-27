import { identifierName } from '@angular/compiler';
import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../modals/passenger.interface'

@Component({
  selector: 'passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss']
})
export class PassengerDetailsComponent implements OnInit, OnChanges {
  @Input()
  detail!: Passenger

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  @Output()
  edit: EventEmitter<any> = new EventEmitter();
  
  editing: boolean = false

  ngOnChanges(changes: any){
    if(changes.detail) this.detail = Object.assign({}, changes.detail.currentValue);
  }

  setName( name: string){
    this.detail.fullName = name
  }

  handleEdit() {
    if(this.editing){
      this.edit.emit(this.detail)
    }
    this.editing = !this.editing
  }

  onRemove(): void {
    this.remove.emit(this.detail)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
