import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import IJob from '../job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
	jobItem: IJob;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData('http://localhost:4200/assets/jobs.json').subscribe((job:IJob) => {
      this.jobItem = job;
    })
  }

}
