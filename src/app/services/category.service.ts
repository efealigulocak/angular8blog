import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"; //apiye ajax istekleri gerçekleşriemek için gereken kütüphane
import{Category} from "../models/category";

//category ile ilgili apilere istek gerçekleştiriyor

@Injectable({
  providedIn: 'root'
})
export class CategoryService {




  private apiUrl:string = "https://localhost:44308/api/categories"; //ana adresimiz bu


  constructor(private httpClient:HttpClient){



  }
  public loading: boolean = true;
  public getCategories(){

      

      return this.httpClient.get<Category[]>(this.apiUrl);



      //category list dönecek



  }


  public getCategorybyId(id:number){


      let  url = `${this.apiUrl}/${id}` //backtick sayesinde string ifadelerini kolay şekilde birleştiririz
      return this.httpClient.get<Category>(url); //sadece tek category dönecek




  }


}
//injectable dosya diğer componentlerın consturctorında bunu enjekte edip değişkenlerini kullanabailiriz.
