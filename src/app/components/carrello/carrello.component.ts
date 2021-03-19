import { CarrelloService } from './../../services/carrello.service';
import { JwtService } from './../../utils/jwt.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css'],
})
export class CarrelloComponent implements OnInit {
  righeCarrello = [];
  emptyCart: boolean;
  constructor(
    private jwtServ: JwtService,
    private carrelloServ: CarrelloService
  ) {}

  ngOnInit(): void {
    this.viewCart();
    this.emptyCart = false;
  }

  viewCart() {
    let cartObs = this.carrelloServ.getCart();
    cartObs.subscribe(
      (data) => {
        this.righeCarrello = data.dettagli;
      },
      (error) => {
        this.emptyCart = true;
      }
    );
  }

  total() {
    let totale = 0;
    for (let riga of this.righeCarrello) {
      totale += riga.articolo.prezzoUnitario * riga.quantita;
    }
    return totale;
  }
}
