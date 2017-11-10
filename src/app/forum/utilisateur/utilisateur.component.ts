import { Component, OnInit } from '@angular/core';
import {ForumService} from '../forum.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Utilisateur} from "../utilisateur";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css'],
  providers: [ForumService]
})
export class UtilisateurComponent implements OnInit {
 utilisateur: Utilisateur;
  constructor(private router: Router, private route: ActivatedRoute, private service: ForumService) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getUserById(+params.get('id')))
      .subscribe(data => this.utilisateur = data);
  }

}
