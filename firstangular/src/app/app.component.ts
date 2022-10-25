import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})

export class AppComponent {
  title: string 
  isHappy: boolean = false
  numberOne: number = 1
  numberTwo: number = 2
  name: string = 'Vini'

  constructor(){
    this.title = 'Ultimate Angular'
  }

  handleClick(){
    this.name = 'Vini do Botão'
  }

  handleChange(value: any){ 
    this.name = value
  }
}