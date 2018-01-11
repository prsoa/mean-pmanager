import { Component } from '@angular/core';
import { ProjectService } from './services/project.service';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectService, TaskService]
})
export class AppComponent {
  title = 'app';
}
