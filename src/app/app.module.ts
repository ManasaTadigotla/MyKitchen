import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TagComponent } from './tag/tag.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CheckoutComponent } from './checkout/checkout.component'
//import {FormsModule} from '@angular/forms';
//import {TableModule} from 'primeng/table';
//import { NgxPaginationModule } from 'ngx-pagination';
//import { NgbPaginationNext } from '@ng-bootstrap/ng-bootstrap';
//import { TestReportComponent } from './test-report/test-report.component';
//import { StartQuizComponent } from './start-quiz/start-quiz.component';
//import { ChangepasswordComponent } from './changepassword/changepassword.component';


@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    ViewCartComponent,
    HomeComponent,
    SearchComponent,
    TagComponent,
    CartPageComponent,
    FoodPageComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
