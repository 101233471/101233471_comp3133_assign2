import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddListingComponent } from './add-listing/add-listing.component';
import { AllListingComponent } from './all-listing/all-listing.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewListingComponent } from './view-listing/view-listing.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'allListing', component: AllListingComponent},
  {path: 'addListing', component: AddListingComponent},
  {path: 'viewListing', component: ViewListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [RegisterComponent, LoginComponent, HistoryComponent, AllListingComponent, ViewListingComponent]
