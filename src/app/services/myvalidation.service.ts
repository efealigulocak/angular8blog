import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MyvalidationService {

  constructor() { }




  getValidationMessages(f:AbstractControl,name:string)  //abstract kontrol html tarfındaki formu temsil ediyor ordaki hataları bulmaya calısacagız
{
  if(f.errors){

    for(let errorName in f.errors)
    {
      console.log(errorName);
      if(errorName =="required")
      return `${name} alanı boş bırakılamaz`
      else if (errorName=="email")
      return "Email formatı yanlış";
      else if(errorName== "minlength" ){
      return `${name} alanı en az 5 karakter olmalıdır`;
      }

    }

  }





}




}
