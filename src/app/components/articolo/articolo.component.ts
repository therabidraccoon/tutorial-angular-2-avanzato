import { CarrelloService } from './../../services/carrello.service';
import { ArticoloService } from './../../services/articolo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css'],
})
export class ArticoloComponent implements OnInit {
  articoli = [];
  token: string;
  dettagli = [];
  errorMessage: boolean;

  constructor(
    private articoloServ: ArticoloService,
    private carrelloServ: CarrelloService
  ) {}

  ngOnInit(): void {
    this.findAll();
    this.errorMessage = false;
  }

  findAll() {
    let articoloObs = this.articoloServ.findAll();
    articoloObs.subscribe(
      (data) => {
        this.articoli = data;
      },
      (error) => {
        this.errorMessage = true;
      }
    );
  }

  addItemToCart(codiceArticolo: string) {
    let articoloObs = this.carrelloServ.addItemToCart(codiceArticolo, 1);
    articoloObs.subscribe((data) => {
      this.dettagli = data.dettagli;
      this.carrelloServ.badge = data.dettagli.length;
    });
  }
}
