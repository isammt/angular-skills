import { Component, OnInit, Input } from '@angular/core';
import { Card } from './card';
import { SkillService } from './skill.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  constructor(private skillService: SkillService) { }

  ngOnInit() {
  }

  async onLike(card: Card) {
    card.likes = card.likes + 1;
    this.skillService.updateSkill(card);
  }

  buttonColor(cardLikes: number) {
    return 'mat-button ' + (cardLikes >= 5 && cardLikes < 10 ? 'blue' :
      cardLikes >= 10 ? 'pink' :
        'default')
  }

  onShare() {
    window.open("https://www.linkedin.com/in/isabellatrigo/", '_blank')
  }

}
