import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../utilisateur';
import {ForumService} from "../forum.service";

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css'],
  providers: [ForumService]
})
export class UtilisateurListComponent implements OnInit {
utilisateurs: Utilisateur[];
  constructor(private service: ForumService) { }

  ngOnInit() {
    this.service.getAllUtilisateur().subscribe(data => this.utilisateurs = data);
  }

}
