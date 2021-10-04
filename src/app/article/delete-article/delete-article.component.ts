import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'app/services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent implements OnInit {

  id:string=''
  constructor(private _service:ArticleService,private _activatedRoute:ActivatedRoute,private _matsnackbar:MatSnackBar) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(data => {
      this.id = data.id;
    })
    this._service.delete(this.id).subscribe(data => {
      console.log('record deleted successfully');
      this._matsnackbar.open('record deleted successfully.');
    }, err => {
      console.log(err);
      this._matsnackbar.open('Unable to delete the record.');
    });
  }

}
