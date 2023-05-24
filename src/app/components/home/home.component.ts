import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string;
  lastName: string;
  message: string;
  isDisabled: boolean;

  constructor() {
    this.name = "John";
    this.lastName = "Doe";
    this.message = "Enter your name";
    this.isDisabled = false;
  }

  sayHello(): void {
    console.log(`Hello ${this.name} ${this.lastName}`);
  }
}
