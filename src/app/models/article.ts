import { Category } from './category';

export class Article { //export işaretlemek önemli cunku baska modeller kullnacak

id:number;
title:string;
contentMain:string;
contentSummary:string;

publishDate:Date;
picture:string;
viewCount:number;
commentCount:number;
category:Category;






}

