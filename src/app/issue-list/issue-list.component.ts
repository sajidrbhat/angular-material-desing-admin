import { ArticleService } from "./../services/article.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "issue-list",
  templateUrl: "./issue-list.component.html",
  styleUrls: ["./issue-list.component.css"],
})
export class IssueListComponent implements OnInit {
  collection: any;
  constructor(private service: ArticleService) {
    this.service.list().subscribe((data) => {
      this.collection = data;
    });
    console.log("list hit");
  }

  ngOnInit(): void {}
}
