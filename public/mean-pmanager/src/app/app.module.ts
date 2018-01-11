import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// New modules
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { InlineEditComponent } from './components/inline-edit/inline-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    TasksComponent,
    InlineEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
