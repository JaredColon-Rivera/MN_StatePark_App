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
        path: 'northwest',
        children: [
          {
            path: "",
            loadChildren: () => import('./northwest/northwest.module').then(m => m.NorthwestPageModule)
          },
          {
            path: ":northwestParkId",
            loadChildren: () => import("./northwest/northwest-details/northwest-details.module").then(m => m.NorthwestDetailsPageModule)
          }
        ]
      },
      {
        path: 'northeast',
        children: [
          {
            path: "",
            loadChildren: () => import('./northeast/northeast.module').then(m => m.NortheastPageModule)
          },
          {
            path: ":northeastParkId",
            loadChildren: () => import("./northeast/northeast-details/northeast-details.module").then(m => m.NortheastDetailsPageModule)
          }
        ]
      },
      {
        path: 'southwest',
        children: [
          {
            path: "",
            loadChildren: () => import('./southwest/southwest.module').then(m => m.SouthwestPageModule)
          },
          {
            path: ":southwestParkId",
            loadChildren: () => import("./southwest/southwest-details/southwest-details.module").then(m => m.SouthwestDetailsPageModule)
          }
        ]
      },
      {
        path: 'southeast',
        children: [
          {
            path: "",
            loadChildren: () => import('./southeast/southeast.module').then(m => m.SoutheastPageModule)
          },
          {
            path: ":southeastParkId",
            loadChildren: () => import("./southeast/southeast-details/southeast-details.module").then(m => m.SoutheastDetailsPageModule)
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
