import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'add', loadChildren: './add/add.module#AddPageModule' },
  { path: 'edit/:roastid', loadChildren: './add/add.module#AddPageModule' },
  { path: 'tasting/:roastid', loadChildren: './tasting/tasting.module#TastingPageModule'},
  { path: 'add-tasting/:roastid', loadChildren: './add-tasting/add-tasting.module#AddTastingPageModule' },
  { path: 'edit-tasting/:roastid/:tasteid', loadChildren: './add-tasting/add-tasting.module#AddTastingPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
