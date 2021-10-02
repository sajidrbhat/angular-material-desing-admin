import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class ArticleService {
  baseUrl: string = "https://jsonplaceholder.typicode.com/";
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get(this.baseUrl + "users");
  }
}
