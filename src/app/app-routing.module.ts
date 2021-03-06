import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AdminRechercheComponent } from './admin-recherche/admin-recherche.component';

import { AdminCreerComponent } from './admin-creer/admin-creer.component';

import { AccueilComponent } from './accueil/accueil.component';
import { ProduitPageComponent } from './produit-page/produit-page.component';
import { ProduitListeComponent } from './produit-liste/produit-liste.component';
import { AdminModifierComponent } from './admin-modifier/admin-modifier.component';
import { VisitorAfficheComponent } from './visitor-affiche/visitor-affiche.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilModifierComponent } from './profil-modifier/profil-modifier.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { AfficheCommandeComponent } from './affiche-commande/affiche-commande.component';
import { AdminSearchOrderComponent } from './admin-search-order/admin-search-order.component';
import { AdminAfficheOrderComponent } from './admin-affiche-order/admin-affiche-order.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'search', component: AdminRechercheComponent },
  { path: 'create', component: AdminCreerComponent },
  { path: 'produitPage', component: ProduitPageComponent },
  { path: 'produitListe', component: ProduitListeComponent },
  { path: 'modif', component: AdminModifierComponent },
  { path: 'visite', component: VisitorAfficheComponent },
  { path: 'pageprod', component: ProduitPageComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'profil-modif', component: ProfilModifierComponent },
  { path: 'order-list', component: ListOrderComponent },
  { path: 'admin-search-order', component: AdminSearchOrderComponent },
  { path: 'affiche-order', component: AfficheCommandeComponent },
  { path: 'admin-affiche-order', component: AdminAfficheOrderComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
