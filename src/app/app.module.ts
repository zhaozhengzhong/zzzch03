import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentList } from './student-list.component';
import { Student } from './student.component';
// import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentList,
    Student
    // ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
