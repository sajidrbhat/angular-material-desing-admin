import { Component, OnInit } from "@angular/core";
import { ArticleService } from "app/services/article.service";

@Component({
  selector: "list-article",
  templateUrl: "./list-article.component.html",
  styleUrls: ["./list-article.component.css"],
})
export class ListArticleComponent implements OnInit {
  collection: any;
  constructor(private service: ArticleService) {
    this.service.list().subscribe((data) => {
      this.collection = data;
    });
    console.log("list hit");
  }

  ngOnInit(): void {}
}
