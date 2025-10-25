import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: 'parent',
    component: ParentComponent,
    canActivateChild: [authGuard],
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component },
    ],
  },
  { path: '**', redirectTo: '/parent', pathMatch: 'full' },
];
