import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';

export class Project{
  _id: string;
  title: string;
  isDone: boolean;
}

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  //styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[];
  title: string;

  constructor(private projectService:ProjectService) {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

  addProject(event){
    event.preventDefault();
    var newProject = {
      title: this.title
    }

    this.projectService.addProject(newProject)
      .subscribe(project => {
        this.projects.push(project);
        this.title = '';
      });
  }

  deleteProject(id){
    var projects = this.projects;

    this.projectService.deleteProject(id).subscribe(data => {
      if(data.n == 1){
        for(var i = 0; i < projects.length; i++){
          if(projects[i]._id == id){
            projects.splice(i, 1);
          }
        }
      }
    })
  }

  updateStatus(project){
    var _project = {
      _id: project._id,
      title: project.title,
      isDone: !project.isDone
    }

    this.projectService.updateStatus(_project).subscribe(data => {
      project.isDone = !project.isDone;
    });
  }
}
