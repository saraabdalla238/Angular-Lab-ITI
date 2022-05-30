import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { HomeComponent } from './home/home.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddComponent } from './todo/add/add.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductFavouriteComponent } from './products/product-favourite/product-favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContainerComponent,
    HomeComponent,
    AsideComponent,
    FooterComponent,
    TodoListComponent,
    AddComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductFavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
