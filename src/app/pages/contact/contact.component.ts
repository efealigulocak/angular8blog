import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validator, Validators, AbstractControl } from "@angular/forms"; // html tarafındaki form tagına arşılık geliyor
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  loading: boolean;
  success: boolean;
  info: string;

  constructor(private helperService:HelperService) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl("", Validators.required),

      email: new FormControl("", [Validators.required, Validators.email]),

      subject: new FormControl("", Validators.required),

      message: new FormControl("", [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

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

get getControls(){


  return this.contactForm.controls


}
  onSubmit(){

    if(this.contactForm.valid){

      this.loading=true;



       this.helperService.sendContactEmail(this.contactForm.value)
       .subscribe(data=>{
          this.loading=false;
          this.success=true;
          this.contactForm.reset();
          this.info="Mesajınız alınmıştır.En kısa sürede dönüş yapılacaktır";



       },error=>{
          this.loading=false;
          this.success=false;
          this.info="Bir hata meydana geldi.Lütfen daha sonra tekrar deneyiniz";



       });  //normalde contact nesnesi gönderecektik fakat valueları angular json yapıp gönderiyor



    }
    else{


      return false;

    }




  }



}



