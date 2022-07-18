import { Component } from '@angular/core';
declare function owlcarouselpartners(): any;
declare function owlcarouselmultiple(): any; 
declare function wowjs(): any; 
declare function fixedheader(): any; 
declare function viewport(): any; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning | Design by Jayesh Shamnani';

  ngOnInit(): void {
    owlcarouselpartners();
    owlcarouselmultiple();
    wowjs();
    fixedheader();
    viewport();
  }
}
