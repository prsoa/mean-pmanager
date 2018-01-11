import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {
  constructor(private http:Http){
    console.log('Project Service Initialized');
  }

  getProjects(){
    return this.http.get('/api/projects').map(res => res.json());
  }

  addProject(newProject){
    var headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post('/api/projects', JSON.stringify(newProject), {headers: headers})
      .map(res => res.json());
  }

  deleteProject(id){
    return this.http.delete('/api/projects/'+id)
      .map(res => res.json());
  }

  updateStatus(project) {
    var headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.put('/api/projects/'+project._id, JSON.stringify(project), {headers: headers})
      .map(res => res.json());
  }
}
