import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';

export class Task{
  _id: string;
  title: string;
  isDone: boolean;
}

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  //styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[];
  title: string;

  @Input() project_id: string;

  constructor(private taskService:TaskService) {
    /**/
  }

  ngOnInit() {
    this.taskService.getTasks(this.project_id).subscribe(tasks => {
      this.tasks = tasks;
    });
    console.log(this.project_id);
  }

  addTask(event){
    event.preventDefault();
    var newTask = {
      title: this.title,
      isDone: false,
      project_id: this.project_id
    }

    this.taskService.addTask(newTask)
      .subscribe(task => {
        this.tasks.push(task);
        this.title = '';
      });
  }

  deleteTask(id){
    var tasks = this.tasks;

    this.taskService.deleteTask(id).subscribe(data => {
      if(data.n == 1){
        for(var i = 0; i < tasks.length; i++){
          if(tasks[i]._id == id){
            tasks.splice(i, 1);
          }
        }
      }
    })
  }

  updateStatus(task){
    var _task = {
      _id: task._id,
      title: task.title,
      isDone: !task.isDone,
      project_id: task.project_id
    }

    this.taskService.updateStatus(_task).subscribe(data => {
      task.isDone = !task.isDone;
    });
  }
}
