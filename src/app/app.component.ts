import { Component } from '@angular/core';
import { DataService} from '../app/data/data.service';
import { newData} from '../app/data/newData';
import { AdminService} from '../app/data/admin.service';
import { UserService} from '../app/data/user.service';
import { ProductService} from './data/product.service';
import { NewProductService} from './data/newproduct.service';
import {dataServiceFactory} from './data/dataServiceFactory';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[{
    provide: DataService,
    useValue: newData,
  },
  {provide:'ConfigValue', useValue: 10},        
  {provide: UserService, 
  useFactory: (ConfigValue) =>                  
    dataServiceFactory(ConfigValue),                  
  deps: ['ConfigValue']},
  { provide: ProductService, useExisting: NewProductService },
  { provide: NewProductService, useClass: ProductService }           
  ]
})
export class AppComponent {
  title = 'angular-service-practise';
  newData: number;
  newUData: any;
  productData: string;

  constructor(private dataService: DataService, private userService: UserService, private productService: ProductService)
  {
    this.newData = this.dataService.getData();
    this.newUData = this.userService.getNewData();
    this.productData = this.productService.getProduct();
  }

}
