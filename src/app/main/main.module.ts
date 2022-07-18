import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '../layout/layout.module';
import { DatePipe } from '../pipe/date/date.pipe';
import { FilesizePipe } from '../pipe/filesize.pipe';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './about/team/team.component';



@NgModule({
  declarations: [
    HomeComponent,
    DatePipe,
    FilesizePipe,
    AboutComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    TeamComponent
  ]
})
export class MainModule { }
