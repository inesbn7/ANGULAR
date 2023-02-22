import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { ForumComponent } from './forum/forum.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ProductComponent } from './product/product.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  { path: 'emplois', component: OffresEmploiComponentComponent },
  { path: 'product/:id', component: DetailproductComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'User', component: TemplateDrivenFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
