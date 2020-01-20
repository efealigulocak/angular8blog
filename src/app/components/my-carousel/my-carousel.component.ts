import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-carousel',
  templateUrl: './my-carousel.component.html',
  styleUrls: ['./my-carousel.component.css']
})
export class MyCarouselComponent implements OnInit {


  default_article:string="assets/article_empty.png";
  constructor() { }

  ngOnInit() {
  }

}
