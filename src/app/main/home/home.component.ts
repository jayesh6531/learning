import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  // String Interpolation
  heading = 'Get data using data Service';
  itemImageUrl = '../assets/images/favicon.png'

  //Pipes Value
  dates = { todaydate : new Date()};
  file = { size: 21200000 };  

  listdata: any = [];

  //Using Data Service
  constructor(private dataService: DataService) { }

  ngOnInit() {    
    this.dataService.sendGetRequest().subscribe(Response => {
      this.listdata = Response.list;
      console.log("jsondata.", this.listdata);
    });
  }
  
  //Using Http Client
  // constructor(private http: HttpClient) { }

  // ngOnInit(): void {
  //   this.http.get<any>('http://www.mocky.io/v2/5ea172973100002d001eeada').subscribe(Response => {
  //     this.jsondata = Response.list;
  //     console.log("jsondata.", this.jsondata);
  //   });
  // }
  
  AboutContent = 'About works';
  
}

