import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../utilisateur';
import {ForumService} from '../forum.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  providers: [ForumService]
})
export class InscriptionComponent implements OnInit {
utilisateur: Utilisateur;
  constructor(private service: ForumService) { }

  ngOnInit() {
  }
  onSubmit(utilisateur: Utilisateur) {
    this.service.create(utilisateur).subscribe(data => console.log(data));
  }

}
