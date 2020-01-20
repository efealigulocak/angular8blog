import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute } from '@angular/router';
import { windowWhen } from 'rxjs/operators';
import { Article } from 'src/app/models/article';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article:Article;
  category:Category;


  constructor(private articleService:ArticleService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.articleService.loading=true;




      //www.mysite.com/1 deki 1 değerini alacak

      let id= Number(this.route.snapshot.paramMap.get("id"));

      this.articleService.getArticle(id).subscribe(data=>{
        console.log(data);
        this.article=data;
        this.category=data.category;

        this.articleService.ArticleViewCountUp(this.article.id).subscribe();



      });



    });



  }

}
