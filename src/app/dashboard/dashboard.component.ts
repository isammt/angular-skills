import { Component, OnInit } from '@angular/core';
import { SkillService } from './card/skill.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<any>;

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this
      .skillService
      .getSkills()
      .subscribe((ret: any) => {
        this.cards = ret
      })
  }
}
