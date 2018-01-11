webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"app-content\">\n  <projects></projects>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var project_service_1 = __webpack_require__("../../../../../src/app/services/project.service.ts");
var task_service_1 = __webpack_require__("../../../../../src/app/services/task.service.ts");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [project_service_1.ProjectService, task_service_1.TaskService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
// New modules
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var projects_component_1 = __webpack_require__("../../../../../src/app/components/projects/projects.component.ts");
var tasks_component_1 = __webpack_require__("../../../../../src/app/components/tasks/tasks.component.ts");
var inline_edit_component_1 = __webpack_require__("../../../../../src/app/components/inline-edit/inline-edit.component.ts");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                projects_component_1.ProjectsComponent,
                tasks_component_1.TasksComponent,
                inline_edit_component_1.InlineEditComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/components/inline-edit/inline-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bold {\r\n  font-weight: 700;\r\n}\r\n\r\n.block {\r\n  display: inline-block;\r\n}\r\n\r\ndiv.inline-edit {\r\n  text-decoration: none;\r\n  border-bottom: #A8B9CE dashed 1px;\r\n  cursor: pointer;\r\n  text-align: left;\r\n  padding: .5em 0;\r\n  color: #444 !important;\r\n  width: auto;\r\n}\r\n\r\ninput {\r\n  border: 1px solid #ccc;\r\n  border-radius: 2px;\r\n  padding: 4px 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/inline-edit/inline-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"editing\">\r\n  <input #inlineEditControl [required]=\"required\" (blur)=\"onBlur($event)\" [name]=\"value\" [(ngModel)]=\"value\" [type]=\"type\" [placeholder]=\"label\" class=\"edit-input\" />\r\n</span>\r\n<span *ngIf=\"!editing\">\r\n  <span class=\"block\">{{label}}</span>\r\n</span>\r\n<div class=\"pull-right\">\r\n  <button type=\"button\" class=\"btn btn-default edit\" aria-label=\"Left Align\" >\r\n    <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\" (click)=\"edit(value)\" (focus)=\"edit(value);\"></span>\r\n  </button>\r\n  <button type=\"button\" class=\"btn btn-default remove\" aria-label=\"Left Align\" >\r\n    <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\" (click)=\"delete()\"></span>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/inline-edit/inline-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return InlineEditComponent; }),
    multi: true
};
var InlineEditComponent = (function () {
    function InlineEditComponent(element, _renderer) {
        this._renderer = _renderer;
        this.label = ''; // Label value for input element
        this.type = 'text'; // The type of input element
        this.required = false; // Is input requried?
        this.disabled = false; // Is input disabled?
        this._value = ''; // Private variable for input value
        this.preValue = ''; // The value before clicking to edit
        this.editing = false; // Is Component in edit mode?
        this.onChange = Function.prototype; // Trascend the onChange event
        this.onTouched = Function.prototype; // Trascend the onTouch event
        this.deleteEvent = new core_1.EventEmitter();
        this.editEvent = new core_1.EventEmitter();
    }
    Object.defineProperty(InlineEditComponent.prototype, "value", {
        // Control Value Accessors for ngModel
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // Required for ControlValueAccessor interface
    InlineEditComponent.prototype.writeValue = function (value) {
        this._value = value;
    };
    // Required forControlValueAccessor interface
    InlineEditComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    // Required forControlValueAccessor interface
    InlineEditComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    // Do stuff when the input element loses focus
    InlineEditComponent.prototype.onBlur = function ($event) {
        this.editing = false;
        this.editEvent.emit('editEvent');
    };
    // Start the editting process for the input element
    InlineEditComponent.prototype.edit = function (value) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        this.preValue = value;
        this.editing = true;
        // Focus on the input element just as the editing begins
        setTimeout(function (_) { return _this.inlineEditControl.nativeElement.focus(); }, 'focus', []);
    };
    InlineEditComponent.prototype.ngOnInit = function () {
    };
    InlineEditComponent.prototype.delete = function () {
        this.deleteEvent.emit('deleteEvent');
    };
    __decorate([
        core_1.ViewChild('inlineEditControl'),
        __metadata("design:type", core_1.ElementRef)
    ], InlineEditComponent.prototype, "inlineEditControl", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InlineEditComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InlineEditComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InlineEditComponent.prototype, "required", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InlineEditComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], InlineEditComponent.prototype, "deleteEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], InlineEditComponent.prototype, "editEvent", void 0);
    InlineEditComponent = __decorate([
        core_1.Component({
            selector: 'app-inline-edit',
            template: __webpack_require__("../../../../../src/app/components/inline-edit/inline-edit.component.html"),
            providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
            styles: [__webpack_require__("../../../../../src/app/components/inline-edit/inline-edit.component.css")]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
    ], InlineEditComponent);
    return InlineEditComponent;
}());
exports.InlineEditComponent = InlineEditComponent;


/***/ }),

/***/ "../../../../../src/app/components/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8\">\r\n  <div class=\"row\">\r\n    <div *ngIf=\"projects && projects.length === 0\">\r\n      <h3>\r\n        You haven't created any projects yet.\r\n      </h3>\r\n      <br />\r\n      <p>\r\n        Use the form on the right to add a new project.\r\n      </p>\r\n    </div>\r\n    <div class=\"col-sm-6\" *ngFor=\"let project of projects\">\r\n      <div class=\"panel panel-default project\">\r\n        <div class=\"panel-heading\">\r\n          <app-inline-edit [(ngModel)]=\"title\" label=\"{{project.title}}\" [required]=\"true\" type=\"text\" (deleteEvent)=\"deleteProject($event, project._id)\" (editEvent)=\"editProject(project)\"></app-inline-edit>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <tasks project_id=\"{{project._id}}\"></tasks>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"col-md-4\">\r\n  <div class=\"well\">\r\n    <h3>Create New Project</h3>\r\n    <form (submit)=\"addProject($event)\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" [(ngModel)]=\"newTitle\" class=\"form-control\" name=\"title\" placeholder=\"Add Project..\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"submit\" value=\"Add\" class=\"btn btn-default\" />\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/projects/projects.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var project_service_1 = __webpack_require__("../../../../../src/app/services/project.service.ts");
var Project = (function () {
    function Project() {
    }
    return Project;
}());
exports.Project = Project;
var ProjectsComponent = (function () {
    function ProjectsComponent(projectService) {
        var _this = this;
        this.projectService = projectService;
        this.projectService.getProjects().subscribe(function (projects) {
            _this.projects = projects;
        });
    }
    ProjectsComponent.prototype.addProject = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.newTitle) {
            var newProject = {
                title: this.newTitle
            };
            this.projectService.addProject(newProject)
                .subscribe(function (project) {
                _this.projects.push(project);
                _this.newTitle = '';
            });
        }
    };
    ProjectsComponent.prototype.deleteProject = function (event, id) {
        var projects = this.projects;
        this.projectService.deleteProject(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < projects.length; i++) {
                    if (projects[i]._id == id) {
                        projects.splice(i, 1);
                    }
                }
            }
        });
    };
    ProjectsComponent.prototype.editProject = function (project) {
        var projects = this.projects;
        if (this.title) {
            var _project = {
                _id: project._id,
                title: this.title,
            };
            this.projectService.editProject(_project).subscribe(function (project) {
                for (var i = 0; i < projects.length; i++) {
                    if (projects[i]._id == project._id) {
                        projects[i].title = _project.title;
                    }
                }
            });
        }
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'projects',
            template: __webpack_require__("../../../../../src/app/components/projects/projects.component.html"),
        }),
        __metadata("design:paramtypes", [project_service_1.ProjectService])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;


/***/ }),

/***/ "../../../../../src/app/components/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"task-list\">\r\n  <div class=\"tasks-todo\">\r\n    <p>\r\n      To Do\r\n    </p>\r\n    <div class=\"list\">\r\n      <div *ngFor=\"let task of tasks\">\r\n        <div class=\"row task\" *ngIf=\"!task.isDone\">\r\n          <div class=\"col-sm-2\">\r\n            <input type=\"checkbox\" [checked]=\"task.isDone\" (click)=\"updateStatus(task)\" />\r\n          </div>\r\n          <div class=\"col-sm-10\">\r\n            <app-inline-edit [(ngModel)]=\"title\" label=\"{{task.title}}\" [required]=\"true\" type=\"text\" (deleteEvent)=\"deleteTask($event, task._id)\" (editEvent)=\"editTask(task)\"></app-inline-edit>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr />\r\n  <div class=\"tasks-done\">\r\n    <p>\r\n      Done\r\n    </p>\r\n    <div class=\"list\">\r\n      <div *ngFor=\"let task of tasks\">\r\n        <div class=\"row\" *ngIf=\"task.isDone\">\r\n          <div class=\"col-sm-2\">\r\n            <input type=\"checkbox\" [checked]=\"task.isDone\" (click)=\"updateStatus(task)\" />\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <span title=\"Status: Completed at {{task.finish_date | date:'dd/MM/yyyy - hh:mm'}}\">{{task.title}}</span>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr />\r\n  <form (submit)=\"addTask($event)\">\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-8\">\r\n        <input type=\"text\" [(ngModel)]=\"newTitle\" class=\"form-control\" name=\"title\" placeholder=\"Add Task..\" />\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <input type=\"submit\" value=\"Add\" class=\"btn btn-default\" />\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/tasks/tasks.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var task_service_1 = __webpack_require__("../../../../../src/app/services/task.service.ts");
var Task = (function () {
    function Task() {
    }
    return Task;
}());
exports.Task = Task;
var TasksComponent = (function () {
    function TasksComponent(taskService) {
        this.taskService = taskService;
        /**/
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getTasks(this.project_id).subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    TasksComponent.prototype.addTask = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.newTitle) {
            var newTask = {
                title: this.newTitle,
                isDone: false,
                project_id: this.project_id
            };
            this.taskService.addTask(newTask)
                .subscribe(function (task) {
                _this.tasks.push(task);
                _this.newTitle = '';
            });
        }
    };
    TasksComponent.prototype.deleteTask = function (event, id) {
        var tasks = this.tasks;
        this.taskService.deleteTask(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i]._id == id) {
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    };
    TasksComponent.prototype.updateStatus = function (task) {
        var tasks = this.tasks;
        var _task = {
            _id: task._id,
            title: task.title,
            isDone: !task.isDone,
            finish_date: Date(),
            project_id: task.project_id
        };
        this.taskService.updateStatus(_task).subscribe(function (data) {
            task.isDone = !task.isDone;
            for (var i = 0; i < tasks.length; i++) {
                if (tasks[i]._id == _task._id) {
                    tasks[i].isDone = _task.isDone;
                    tasks[i].finish_date = _task.finish_date;
                }
            }
        });
    };
    TasksComponent.prototype.editTask = function (task) {
        var tasks = this.tasks;
        if (this.title) {
            var _task = {
                _id: task._id,
                title: this.title,
            };
            this.taskService.updateStatus(_task).subscribe(function (task) {
                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i]._id == _task._id) {
                        tasks[i].title = _task.title;
                    }
                }
            });
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TasksComponent.prototype, "project_id", void 0);
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'tasks',
            template: __webpack_require__("../../../../../src/app/components/tasks/tasks.component.html"),
        }),
        __metadata("design:paramtypes", [task_service_1.TaskService])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;


/***/ }),

/***/ "../../../../../src/app/services/project.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        console.log('Project Service Initialized');
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get('/api/projects').map(function (res) { return res.json(); });
    };
    ProjectService.prototype.addProject = function (newProject) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/projects', JSON.stringify(newProject), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProjectService.prototype.deleteProject = function (id) {
        return this.http.delete('/api/projects/' + id)
            .map(function (res) { return res.json(); });
    };
    ProjectService.prototype.editProject = function (project) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/projects/' + project._id, JSON.stringify(project), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProjectService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;


/***/ }),

/***/ "../../../../../src/app/services/task.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        console.log('Task Service Initialized');
    }
    TaskService.prototype.getTasks = function (project_id) {
        return this.http.get('/api/tasks/project/' + project_id).map(function (res) { return res.json(); });
    };
    TaskService.prototype.addTask = function (newTask) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/tasks', JSON.stringify(newTask), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.deleteTask = function (id) {
        return this.http.delete('/api/tasks/' + id)
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.updateStatus = function (task) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/tasks/' + task._id, JSON.stringify(task), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TaskService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map