import { Component, OnInit } from "@angular/core";
import { ArticleService } from "app/services/article.service";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
}

@Component({
  selector: "list-article",
  templateUrl: "./list-article.component.html",
  styleUrls: ["./list-article.component.css"],
})
export class ListArticleComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "username", "email", "action"];
  dataSource: User[] = [];
departments:any[]=[];
  constructor(private service: ArticleService) {
    this.service.list().subscribe((data) => {
      this.dataSource = data;
    });
    this.service.d_list().subscribe((data) => {
      this.departments = data;
    });
    console.log("list hit");
  }

  ngOnInit(): void {}
}
