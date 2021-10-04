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
  get(id: string) {
    return this.http.get(this.baseUrl + "users/" + id);
  }
  post(object: any) {
    return this.http.post(this.baseUrl + "users", object);
  }
  delete(id: any) {
    return this.http.delete(this.baseUrl + "users/" + id);
  }
}
