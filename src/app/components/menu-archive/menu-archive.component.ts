import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Archive } from 'src/app/models/archive';

@Component({
  selector: 'app-menu-archive',
  templateUrl: './menu-archive.component.html',
  styleUrls: ['./menu-archive.component.css']
})
export class MenuArchiveComponent implements OnInit {

  archive:Archive[];
  loading:Boolean= true;

  constructor(private articleService:ArticleService) { }

  ngOnInit() {



    this.articleService.getArticlesArchive().subscribe(data=>{
      this.archive=data;
      this.loading=false;





    },error=>{
      console.log("bir hata meydana geldi:"+error);
    });



  }


}
