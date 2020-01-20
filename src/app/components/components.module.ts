import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import{RouterModule, Router} from '@angular/router';
import { PageTitleComponent } from './page-title/page-title.component';
import{NgxPaginationModule} from "ngx-pagination"
import { ArticlesComponent } from './articles/articles.component' //sayfalama için gerekn modül(kütüphane)
import { UrlformatPipe } from '../Pipes/urlformat.pipe';
import { MenuArticleMostViewComponent } from './menu-article-most-view/menu-article-most-view.component';
import { MenuArchiveComponent } from './menu-archive/menu-archive.component';
import { MyCarouselComponent } from './my-carousel/my-carousel.component';




@NgModule({
  declarations: [MenuCategoryComponent, ArticlesComponent,UrlformatPipe, MenuArticleMostViewComponent, MenuArchiveComponent, MyCarouselComponent],
  imports: [
    RouterModule,
    CommonModule,
    NgxPaginationModule,
    MyCarouselComponent
  ],
  exports:[
    MenuCategoryComponent,
    ArticlesComponent,
    NgxPaginationModule,
    UrlformatPipe,
    MenuArticleMostViewComponent,
    MenuArchiveComponent,
    MyCarouselComponent


  ]
})
export class ComponentsModule { }
