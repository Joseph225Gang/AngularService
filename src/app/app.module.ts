import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { DataService } from './data/data.service';
import { AdminService } from './data/admin.service';
import { UserService } from './data/user.service';
import { ProductService} from './data/product.service';
import { NewProductService} from './data/newproduct.service';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    AdminService,
    UserService,
    ProductService,
    NewProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
