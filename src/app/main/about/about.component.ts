import { Component, OnInit, Input } from '@angular/core';

export interface Hero {
  name: string;
}

/* My Team Data */
const TeamMembers = [
  {name: 'Jayesh', desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem officiis corrupti veritatis eos molestiae, perferendis eius. Ex accusamus aliquam, enim quod iusto ratione sed? Maiores illum neque minus quasi nam.'},
  {name: 'Rahul', desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem officiis corrupti veritatis eos molestiae, perferendis eius. Ex accusamus aliquam, enim quod iusto ratione sed? Maiores illum neque minus quasi nam.'},
  {name: 'Rakesh', desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem officiis corrupti veritatis eos molestiae, perferendis eius. Ex accusamus aliquam, enim quod iusto ratione sed? Maiores illum neque minus quasi nam.'}
]
/* /My Team Data */

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  @Input() item = ''; // decorate the property with @Input()

  @Input() hero!: Hero;
  @Input('master') masterName = ''; // tslint:disable-line: 

  constructor() { }

  ngOnInit(): void {
  }

  MyTeam = TeamMembers;
  Title = 'Our Team'
}

