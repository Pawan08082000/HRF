import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';
import * as json_data from './fix-interview.json';

@Component({
  selector: 'app-fixing-interview',
  templateUrl: './fixing-interview.component.html',
  styleUrls: ['./fixing-interview.component.scss']
})
export class FixingInterviewComponent implements OnInit {

  
  FixInterviewForm = this.fb.group({
    Vacancy: [null, Validators.required],
    Candidate: [null, Validators.required],
    InterviewTime: [null, Validators.required],
    Date: [null, Validators.required],
    Method: [null, Validators.required],
    Status: [null, Validators.required],
    Comments: [null],
    
  });

  Vacancy = json_data.Vacancy;
  Method = json_data.Method;
  Status = json_data.Status;


  title: String;

  constructor(
    private fb: FormBuilder,
    private titleService: TitleService
  ) { 
    this.titleService.setTitle('Add Job Vacancy');

  }

  ngOnInit(): void {
    this.titleService
    .getTitle()
    .subscribe((appTitle) => (this.title = appTitle));

  }
onSubmit(){
  console.log('submitted')
}
}
