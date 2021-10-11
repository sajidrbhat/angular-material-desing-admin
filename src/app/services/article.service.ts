import { Observable } from "rxjs";
import { User } from "./../article/list-article/list-article.component";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class ArticleService {
  baseUrl: string = "https://jsonplaceholder.typicode.com/";
  constructor(private http: HttpClient) {}
  list(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + "users");
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
  update(id: any, object: any) {
    return this.http.put(this.baseUrl + "users/" + id, object);
  }
  d_list(): Observable<any[]> {
    return this.http.get<any[]>("http://api.caasjk.com/department");
  }
  /*
  readonly APIUrl = "http://localhost:58683/api";
  readonly PhotoUrl = "http://localhost:58683/Photos";
  constructor(private http: HttpClient) {}
  getDepList(): Observable<Department[]> {
    return this.http.get<Department[]>(this.APIUrl + "/department");
  }
  addDepartment(val: any) {
    return this.http.post(this.APIUrl + "/department", val);
  }
  uploadPhoto(val: any) {
    return this.http.post(this.APIUrl + "/Employee/SaveFile", val);
  }
  */
}
