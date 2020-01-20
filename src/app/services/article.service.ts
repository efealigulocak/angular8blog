import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; //apiye ajax istekleri gerçekleşriemek için gereken kütüphane
import { ArticlePg } from "../models/article-pg";
import { tap } from "rxjs/operators";
import { Article } from "../models/article";
import { Archive } from "../models/archive";

//injactable tüm componentleri erişilevilir kılmak için

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  public loading: boolean = true;
  private ApiUrl: string = "https://localhost:44308/api/articles";

  getArticlesWithoutPg() {
    return this.httpClient.get<Article[]>(this.ApiUrl);
  }

  getArticles(page: number, pageSize: number) {
    let api = `${this.ApiUrl}/${page}/${pageSize}`;

    return this.httpClient.get<ArticlePg>(api).pipe(
      tap(x => {
        //data bunun içine girdiyse dolmuş demektir.
        //o yüzden loadi,ng true oldu

        this.loading = false;

        //Ajax ile ilgili işlerde rxjs baya yararlı
      })
    ); //obserable nesne döber (rxjs sayesinde) subscribe olabiliriz.
  }
  getSearchArticles(searchText: string, page: number, pageSize: number) {
    let api = `${this.ApiUrl}/SearchArticles/${searchText}/${page}/${pageSize}`;

    return this.httpClient.get<ArticlePg>(api).pipe(
      tap(x => {
        //data bunun içine girdiyse dolmuş demektir.
        //o yüzden loadi,ng true oldu

        this.loading = false;

        //Ajax ile ilgili işlerde rxjs baya yararlı
      })
    ); //obserabl
  }

  getArticlesWithCategory(categoryId: number, page: number, pageSize: number) {
    let api = `${this.ApiUrl}/GetArticlesWithCategory/${categoryId}/${page}/${pageSize}`;
    return this.httpClient.get<ArticlePg>(api).pipe(
      tap(x => {
        //data bunun içine girdiyse dolmuş demektir.
        //o yüzden loadi,ng true oldu

        this.loading = false;

        //Ajax ile ilgili işlerde rxjs baya yararlı
      })
    ); //obserabl
  }

  getArticle(id: number) {
    let api = `${this.ApiUrl}/${id}`;
    return this.httpClient.get<Article>(api).pipe(
      tap(x => {
        this.loading = false;
      })
    );
  }

  getArticlesByMostView() {
    let api = `${this.ApiUrl}/GetArticlesByMostView`;
    return this.httpClient.get<Article[]>(api);
  }

  getArticlesArchive() {
    let api = `${this.ApiUrl}/GetArticlesArchive`;

    return this.httpClient.get<Archive[]>(api);
  }

  getArticleArchiveList(
    year: number,
    month: number,
    page: number,
    pageSize: number
  ) {
    let api = `${this.ApiUrl}/GetArticleArchiveList/${year}/${month}/${page}/${pageSize}`;

    return this.httpClient.get<ArticlePg>(api).pipe(
      tap(x => {
        //data bunun içine girdiyse dolmuş demektir.
        //o yüzden loadi,ng true oldu

        this.loading = false;

        //Ajax ile ilgili işlerde rxjs baya yararlı
      })
    ); //obserabl
  }

  ArticleViewCountUp(id: number) {
    let api = `${this.ApiUrl}/ArticleViewCountUp/${id}`;

    return this.httpClient.get(api);
  }

  saveArticlePicture(image) {
    return this.httpClient.post<any>(
      `${this.ApiUrl}/SaveArticlePicture`,
      image
    );
  }

  addArticle(article:Article){


return this.httpClient.post(this.ApiUrl,article);


  }


  updateArticle(id:number,article:Article){

    return this.httpClient.put(`${this.ApiUrl}/${id}`,article);




  }

  deleteArticle(id:number){


    return this.httpClient.delete(`${this.ApiUrl}/${id}`);

  }
}
