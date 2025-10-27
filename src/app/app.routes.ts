import { Routes } from '@angular/router';
import { HomeComponent } from './newproducts/home/home.component';
import { CreateComponent } from './newproducts/create/create.component';
import { EditComponent } from './newproducts/edit/edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'newproducts/home', pathMatch: 'full' },
  { path: 'newproducts/home', component: HomeComponent },
  { path: 'newproducts/create', component: CreateComponent },
  { path: 'newproducts/edit/:id', component: EditComponent },
];
