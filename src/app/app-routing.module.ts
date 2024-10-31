import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FridayComponent } from './friday/friday.component';
import { SaturdayComponent } from './saturday/saturday.component';
import { SundayComponent } from './sunday/sunday.component';




const routes: Routes = [
  {path:'', component:FridayComponent},
 {path:'friday', component:FridayComponent},
 
  {path:'saturday', component: SaturdayComponent},
 {path:'sunday', component:SundayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
