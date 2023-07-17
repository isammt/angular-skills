import { Component, OnInit, Input} from '@angular/core';
import { Card } from './card';
import { SkillService } from './skill.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() card: Card;
  showAnimation: boolean = false;
  
  constructor(private skillService: SkillService) { }

  ngOnInit() {
  }

  async onLike(card: Card){
    card.likes = card.likes + 1;
    this.showAnimation = false;
    this.skillService.updateSkill(card).subscribe((ret: any) => {
      this.showAnimation = true;

      this
        .skillService
        .getSkills()
        .subscribe((ret: any) => {
          sessionStorage.setItem('sessionSave', JSON.stringify(ret))
        }) 
    });
  }

  buttonColor(cardLikes: number) {
    return 'card__like ' + (cardLikes >= 5 && cardLikes <= 10 ? 'blue' : 
           cardLikes >= 10 ? 'pink' : 
           'default')
  }

  onShare(){
    window.open("https://www.linkedin.com/in/isabellatrigo/", '_blank')
  }

}
