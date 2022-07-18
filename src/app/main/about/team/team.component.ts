import { Component, OnInit, Input } from '@angular/core';
export interface Team {
  name: string;
  desc: any;
}
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  
  @Input() team!: Team;
  @Input() Title = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
