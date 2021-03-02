import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
declare var $: any;

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService],
})
export class ProjectsComponent implements OnInit {
  tabOption = 0;
  githubProjects: any[] = [];

  constructor(private projectsService: ProjectsService) { }

  public ngOnInit() {

    this.projectsService.getApiProjects().subscribe(
      res => this.githubProjects = res,
      err => console.warn('HTTP Error -' + err),
    );

    // $('.tabs').tabs();
  }
}
