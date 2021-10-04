import { ListArticleComponent } from "./article/list-article/list-article.component";
import { IssueListComponent } from "./issue-list/issue-list.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AddArticleComponent } from "./article/add-article/add-article.component";
import { EditArticleComponent } from "./article/edit-article/edit-article.component";
import { DeleteArticleComponent } from "./article/delete-article/delete-article.component";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent,
    children: [
      { path: "issue-list", component: IssueListComponent },
      {
        path: "article",
        children: [
          { path: "list", component: ListArticleComponent },
          { path: "add", component: AddArticleComponent },
          { path: "edit/:id", component: EditArticleComponent },
          { path: "delete/:id", component: DeleteArticleComponent },
        ],
      },
      { path: "", redirectTo: "issue-list", pathMatch: "full" },
    ],
  },

  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./layouts/admin-layout/admin-layout.module").then(
            (m) => m.AdminLayoutModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
