import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './post';
import {Utilisateur} from './utilisateur';

@Injectable()
export class ForumService {

  constructor(private client: HttpClient) { }
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  getAllPost(): Observable<Post[]> {
    return this.client.get<Post[]>('api/posts');
  }
  getUserById(userId: number): Observable<Utilisateur> {
    return this.client.get<Utilisateur>(`/api/users/${userId}`);
  }
  getAllUtilisateur(): Observable<Utilisateur[]> {
    return this.client.get<Utilisateur[]>('api/users');
  }

  create(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.client.post('api/users', JSON.stringify(utilisateur), {headers: this.headers});
  }

}
