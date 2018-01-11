import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';

export class Project{
  _id: string;
  title: string;
}

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  //styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[];
  _id: string;
  title: string;
  newTitle: string;

  constructor(private projectService:ProjectService) {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

  addProject(event){
    event.preventDefault();

    if(this.newTitle){
      var newProject = {
        title: this.newTitle
      }

      this.projectService.addProject(newProject)
        .subscribe(project => {
          this.projects.push(project);
          this.newTitle = '';
        });
      }
  }

  deleteProject(event, id){
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

  editProject(project){
    var projects = this.projects;

    if(this.title) {
      var _project = {
        _id: project._id,
        title: this.title,
      }

      this.projectService.editProject(_project).subscribe(project => {
        for(var i = 0; i < projects.length; i++){
          if(projects[i]._id == project._id){
            projects[i].title = _project.title;
          }
        }
      });
    }
  }
}
