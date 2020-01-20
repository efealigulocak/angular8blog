import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './pages/article/article.component';
import{AdminArticleComponent} from "./admin-pages/article/article/article.component"
import { CategoryArticlesComponent } from './pages/category-articles/category-articles.component';
import { SearchComponent } from './pages/search/search.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { AdminHomeComponent } from './admin-pages/admin-home/admin-home.component';
import { ArticleListComponent } from './admin-pages/article/article-list/article-list.component';
import { ArticleUpdateComponent } from './admin-pages/article/article-update/article-update.component';
import { ArticleAddComponent } from './admin-pages/article/article-add/article-add.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [     //routes adında Routes tipinde bir değişken
{



  path:"",
  component:MainLayoutComponent,
  children://Bu keywordun altına yazacığımız componentler main layoutun içinde olacak

  [


  {
  path:"",
  component:HomeComponent

  },
  {
    path:"sayfa/:page",
    component:HomeComponent






  },



  {
    path:"makale/:title/:id",
    component:ArticleComponent


  },

  {

    path:"arama/sayfa/:page",
    component:SearchComponent

  }
  ,
  {

    path:"arsiv/:year/:month",
    component:ArchiveComponent

  }
  ,
  {

    path:"arsiv/:year/:month/sayfa/:page",
    component:ArchiveComponent

  }
  ,


  {

    path:"kategori/:name/:id/sayfa/:page",
    component:CategoryArticlesComponent


  }
  ,
  {

    path:"kategori/:name/:id",
    component:CategoryArticlesComponent


  }
  ,
  {

path:"hakkimizda",
component:AboutMeComponent
  },
  {
path:"iletisim",
component:ContactComponent
  },


  {
      path:"adminlogin",
      component:AdminLoginComponent



  }
]


},

{

path:"admin",
component:AdminLayoutComponent,

canActivate:[AuthGuardService],
children:[


  {
    path:"",
    component:AdminHomeComponent


  },
  {

    path:"anasayfa",
    component:AdminHomeComponent

  },
  {

    path:"makale",
    component:AdminArticleComponent,
      children:[

        {  //... admin/makale/liste
            path:"liste",
            component:ArticleListComponent
        },
        {
          //.admin/makale/2
          path:"guncelle/:id",
          component:ArticleUpdateComponent

        },
        {

          path:"ekle",
          component:ArticleAddComponent
        }



      ]

  }



]
//Bunun da childrenları olacak

}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
