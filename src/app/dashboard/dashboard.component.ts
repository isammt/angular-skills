import { Component, OnInit } from '@angular/core';
import { SkillService } from './card/skill.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<any>;
  isLoading: boolean;


  constructor(private skillService: SkillService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this
      .skillService
      .getSkills()
      .subscribe((ret: any) => {
        this.cards = ret
        this.isLoading = false;
        sessionStorage.setItem('sessionSave', JSON.stringify(this.cards))
      })

  }

}
