import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteEnum } from './core/enums/app-route.enum';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: AppRouteEnum.Main },
  {
    path: AppRouteEnum.Main,
    loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path: AppRouteEnum.NotFound,
    loadChildren: () => import('./pages/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule)
  },
  {
    path: '**',
    redirectTo: AppRouteEnum.NotFound
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
