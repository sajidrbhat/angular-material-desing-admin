import { ArticleService } from "app/services/article.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "add-article",
  templateUrl: "./add-article.component.html",
  styleUrls: ["./add-article.component.css"],
})
export class AddArticleComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private service: ArticleService,
    private matSnackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({ 
      title: new FormControl("",[Validators.required,Validators.minLength(3)]),
      description: new FormControl("",[Validators.required,Validators.minLength(3)]),
    });
  }

  add() {
    this.service.post(this.form.value).subscribe(
      (data) => {
        console.log("added succesfully");
        this.matSnackbar.open("record added successfully.");
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
