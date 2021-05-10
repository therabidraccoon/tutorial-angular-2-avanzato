import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-reactive-form',
  templateUrl: './custom-reactive-form.component.html',
  styleUrls: ['./custom-reactive-form.component.css'],
})
export class CustomReactiveFormComponent implements OnInit, OnDestroy {
  name = new FormControl('');
  nameSize: number = 0;

  constructor() {}

  ngOnDestroy(): void {
    console.log('form component destroyed');
  }

  ngOnInit(): void {
    this.name.valueChanges.subscribe((newName) => {
      this.nameSize = newName.length;
    });
  }
}
