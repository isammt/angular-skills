import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor() { }

  ngOnInit() {
  }

  onLike(card: any){
   alert(card.likes)
  }

  onShare(card: any){
    // TODO: abrir o link do seu linkedin
  }

}
