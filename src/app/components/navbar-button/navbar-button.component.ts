import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.css'],
})
export class NavbarButtonComponent implements OnInit {
  @Input() buttonDescription: string;
  @Input() badgeValue: number;
  @Output() onClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onClickEvent(event) {
    this.onClick.emit(event);
  }
}
