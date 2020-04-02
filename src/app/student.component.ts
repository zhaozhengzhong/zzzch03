import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'student',
  inputs: ['name'],
  outputs: ['studentSelected'],
  template: `
      <p (click)="oncl()">{{name}}</p>
    `
})
export class Student {
  name: string;
  studentSelected: EventEmitter<string>;
  constructor() {
    this.studentSelected = new EventEmitter();
  }
  oncl() {
    this.studentSelected.emit(this.name);
  }
}