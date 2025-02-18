import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AproposComponent } from './apropos/apropos.component';
import { ProjetsComponent } from './projets/projets.component';
import { SoumissionComponent } from './soumission/soumission.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'accueil', component: MainComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'soumission', component: SoumissionComponent },
  { path: 'contact', component: ContactComponent },  
  { path: '', component: MainComponent },



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
