import { MatSnackBar } from "@angular/material/snack-bar";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
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
  form: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;
  constructor(
    private service: ArticleService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.id = data.id;
    });
    if (this.id !== "") {
      this.service.get(this.id).subscribe((data) => {
        this.model = data;
        console.log(this.model);

        this.form = this.formBuilder.group({
          name: new FormControl(this.model.name),
          email: new FormControl(this.model.email),
        });
        this.dataLoaded = true;
      });
    }
  }
  update() {
    console.log(this.form.value);
    this.service.update(this.id, this.form.value).subscribe(
      (data) => {
        this.snackBar.open("record updated successfully.");
      },
      (err) => {
        this.snackBar.open(err);
      }
    );
  }
}
