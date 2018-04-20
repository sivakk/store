import {environment}from './../environments/environment'



import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';


import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShopingcartComponent } from './shopingcart/shopingcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersucessComponent } from './ordersucess/ordersucess.component';
import { MyorderComponent } from './myorder/myorder.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShopingcartComponent,
    CheckoutComponent,
    OrdersucessComponent,
    MyorderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'products',component:ProductsComponent},
      {path:'shoppingcart',component:ShopingcartComponent},
      {path:'checkout',component:CheckoutComponent},
      {path:'ordersucess',component:OrdersucessComponent},
      {path:'myorder',component:MyorderComponent},
      {path:'login',component:LoginComponent},
      {path:'admin/products',component:AdminProductsComponent},
      {path:'admin/orders',component:AdminOrdersComponent},
     

    ])
  ],
  providers: [AuthService],


  bootstrap: [AppComponent]
})
export class AppModule { }
