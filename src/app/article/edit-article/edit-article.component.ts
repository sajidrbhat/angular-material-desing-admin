import { ArticleService } from "app/services/article.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "edit-article",
  templateUrl: "./edit-article.component.html",
  styleUrls: ["./edit-article.component.css"],
})
export class EditArticleComponent implements OnInit {
  id: string = "";
  model: any;
  constructor(
    private service: ArticleService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.id = data.id;
    });
    this.service.get(this.id).subscribe((data) => {
      this.model = data;
    });
  }
}
