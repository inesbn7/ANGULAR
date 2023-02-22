import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { ForumComponent } from './forum/forum.component';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OffresEmploiComponentComponent,
    NavbarComponent,
    NotFoundComponent,
    DetailproductComponent,
    ForumComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
