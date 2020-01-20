import { Component, OnInit, OnDestroy } from '@angular/core'; //angular core modulu kullanıyo,oninit ve compnent
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import{Router,ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-home', //ekranda göstermek için gereken tag
  templateUrl: './home.component.html', //componentin içi
  styleUrls: ['./home.component.css'] //componentın kullancagı css
})
export class HomeComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    // console.log("başka sayfaya geçildi");   //sayfa değiştikçe ondestry calısır

    if(this.ajax!=null) this.ajax.unsubscribe() ;


    }
  page:number=1;
  articles:Article[];
  totalCount:number;
  pageSize:number=5;
  loadingItem:number=5;
    ajax;



  constructor(private articleService:ArticleService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {

    //component yüklenirken bir işlem yapmak gerekirse burada yapabiliriz.


    this.route.paramMap.subscribe(params => {


      if(params.get("page")){

          this.page=Number(params.get("page"));


      }

      if(this.totalCount > 0){

          if(this.totalCount >= this.page*this.pageSize){
          this.loadingItem=5;
          }
          else{
            this.loadingItem = this.totalCount-(this.page-1)*this.pageSize;
          }

      }
      this.articles=[];
      this.totalCount=0;

      this.ajax=this.articleService.getArticles(this.page,this.pageSize).subscribe(data => {
        console.log(data);

          this.articles=data.articles;


          this.totalCount = data.totalCount;
      })



    });
  }

}
