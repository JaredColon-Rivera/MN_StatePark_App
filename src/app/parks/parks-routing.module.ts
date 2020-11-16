import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParksPage } from './parks.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: ParksPage,
    children: [
      {
        path: 'main',
        loadChildren: () => import('./main/main.module').then(m => m.MainPageModule)
      },
      {
        path: 'metro',
        children: [
          {
            path: "",
            loadChildren: () => import('./metro/metro.module').then(m => m.MetroPageModule)
          },
          {
            path: ":metroParkId",
            loadChildren: () => import("./metro/metro-detail/metro-detail.module").then(m => m.MetroDetailPageModule)
          }
        ]

      },
      {
        path: 'central',
        children: [
          {
            path: "",
            loadChildren: () => import('./central/central.module').then(m => m.CentralPageModule)
          },
          {
            path: ":centralParkId",
            loadChildren: () => import("./central/central-details/central-details.module").then(m => m.CentralDetailsPageModule)
          }
        ]

      },
      {
        path: "",
        redirectTo: "/parks/tabs/main",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/parks/tabs/main",
    pathMatch: "full"
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParksPageRoutingModule { }
