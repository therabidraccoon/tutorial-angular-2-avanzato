import { JwtService } from './../../utils/jwt.service';
import { CarrelloService } from './../../services/carrello.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public carrelloServ: CarrelloService, private router: Router) {}

  ngOnInit(): void {}

  viewCart() {
    this.router.navigate(
      [
        {
          outlets: {
            content: 'carrello',
          },
        },
      ],
      {
        skipLocationChange: true,
      }
    );
  }

  viewItems() {
    this.router.navigate(
      [
        {
          outlets: {
            content: 'articoli',
          },
        },
      ],
      {
        skipLocationChange: true,
      }
    );
  }
}
