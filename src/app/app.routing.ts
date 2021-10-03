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

const routes: Routes = [
  {
    path: "welcome",
    component: WelcomeComponent,
    children: [
      { path: "issue-list", component: IssueListComponent },
      { path: "list-article", component: ListArticleComponent },
      { path: "add-article", component: AddArticleComponent },
      { path: "edit-article/:id", component: EditArticleComponent },
    ],
  },

  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "",
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
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
