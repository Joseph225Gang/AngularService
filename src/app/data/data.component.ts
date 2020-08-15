import { Component, OnInit } from '@angular/core';
import { DataService} from './data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers:[DataService]
})
export class DataComponent implements OnInit {

  constructor(private dataService: DataService) 
  { 
    console.log(dataService.getData());
  }

  ngOnInit() {
  }

}
