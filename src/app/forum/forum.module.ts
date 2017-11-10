import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import {RouterModule, Routes} from '@angular/router';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import {HttpClientModule} from '@angular/common/http';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [{path: 'posts', component: AccueilComponent, children: [
  {path: ':id', component: UtilisateurComponent}
]}, {path: 'utilisateurs', component: UtilisateurListComponent, children:[
  {path: ':id', component: UtilisateurComponent}
] }, {path: 'inscription', component: InscriptionComponent}];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [AccueilComponent, UtilisateurComponent, UtilisateurListComponent, InscriptionComponent]
})
export class ForumModule { }
