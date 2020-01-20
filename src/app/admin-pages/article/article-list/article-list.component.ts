import { Component, OnInit, ViewChild } from '@angular/core';
import { Article } from 'src/app/models/article';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  displayedColumns:string [] = ["Picture","Title","Category","ViewCount","CommentCount","PublishDate","action"];

  //burdaki değerler ajaxtan gelen degerlerle aynı olmak zorunda
  dataSource;
   articles:Article[];

   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;  //static true çünkü data değişirken sayfalama hep duracak
    //viewchild html taglarını typescript tarafıonda yakalamımızı sağlıyor
    //ilk değişkent html tarafındaki componentin adı ikincisi ise typescript tarafındaki compoenewntin adı


  constructor(private articleService:ArticleService) { }

  ngOnInit() {

    this.articleService.getArticlesWithoutPg().subscribe(data=>{

      this.articles=data; //bunu yapmasak da olur

      this.dataSource = new MatTableDataSource<Article>(data); //initial başlangıç datası olarak gelen datayı verdik

      //article olarak verdik generic nesne alıyor


      this.dataSource.paginator=this.paginator; // datasourcea göre sayfalama yapacak



    })
  }

  deleteArticle(id) {
    this.articleService.deleteArticle(id).subscribe(data => {
      let article = this.articles.filter(x => x.id == id)[0];
      let index = this.articles.indexOf(article);

      this.articles.splice(index, 1);
      this.dataSource = new MatTableDataSource<Article>(this.articles);

      this.dataSource.paginator = this.paginator;
    });
  }

}
