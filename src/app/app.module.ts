import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from "@angular/common/http";

import{AdminModule} from "./admin-pages/admin/admin.module";






import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';


import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

import { AdminNavComponent } from './nav/admin-nav/admin-nav.component';
import { MainNavComponent } from './nav/main-nav/main-nav.component';
import { MenuCategoryComponent } from './components/menu-category/menu-category.component'; //bu kaldırılıcak
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ArticleComponent } from './pages/article/article.component';
import { UrlformatPipe } from './Pipes/urlformat.pipe';
import { CategoryArticlesComponent } from './pages/category-articles/category-articles.component';
import { SearchComponent } from './pages/search/search.component';
import { MenuArticleMostViewComponent } from './components/menu-article-most-view/menu-article-most-view.component';
import { MenuArchiveComponent } from './components/menu-archive/menu-archive.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { MaterialModule } from './modules/material/material.module';
import { AdminHomeComponent } from './admin-pages/admin-home/admin-home.component';
import { ArticleAddComponent } from './admin-pages/article/article-add/article-add.component';
import { ArticleUpdateComponent } from './admin-pages/article/article-update/article-update.component';
import { ArticleListComponent } from './admin-pages/article/article-list/article-list.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { MyCarouselComponent } from './components/my-carousel/my-carousel.component';
//Multka aher componenti appmodule eklemek lazım
@NgModule({
  declarations: [
    PageTitleComponent,
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    MainLayoutComponent,

    MainNavComponent,

    MenuCategoryComponent,
    ArticlesComponent,
    ArticleComponent,
    UrlformatPipe,
    CategoryArticlesComponent,
    SearchComponent,
    MenuArticleMostViewComponent,
    MenuArchiveComponent,
    ArchiveComponent,
    AdminLoginComponent,
    MyCarouselComponent






  ],
  imports: [
    NgxPaginationModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AdminModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
