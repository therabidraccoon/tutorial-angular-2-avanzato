import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-articolo-card',
  templateUrl: './articolo-card.component.html',
  styleUrls: ['./articolo-card.component.css'],
})
export class ArticoloCardComponent implements OnInit {
  @Input() articolo: any;
  @Output() addCartEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  addItemToCart() {
    this.addCartEvent.emit(this.articolo.codiceArticolo);
  }
}
