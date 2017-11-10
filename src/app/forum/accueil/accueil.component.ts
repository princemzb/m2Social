import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {ForumService} from '../forum.service';
import {Utilisateur} from '../utilisateur';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  providers: [ForumService]
})
export class AccueilComponent implements OnInit {
  posts: Post[];
  fetchedUtilisateur: Utilisateur ;
  constructor(private service: ForumService) { }

  ngOnInit() {
    this.service.getAllPost().subscribe(data => this.posts = data);
  }
  chowUtilisateur(userId: number): void {
    this.service.getUserById(userId).subscribe(data => this.fetchedUtilisateur = data);
  }
  hideUtilisateur(): void {
    this.fetchedUtilisateur = null;
  }

}
