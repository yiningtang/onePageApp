import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
	private jobItem: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.http.get('http://localhost:4200/assets/jobs.json').subscribe(jobInfo => {
  		this.jobItem = jobInfo;
  	});
  }

}
