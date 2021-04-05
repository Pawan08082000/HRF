import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RequirementStructureService } from 'src/app/services/requirement-structure.service';
import { TitleService } from 'src/app/services/title.service';
import * as json_data from './fix-interview.json';

@Component({
  selector: 'app-fixing-interview',
  templateUrl: './fixing-interview.component.html',
  styleUrls: ['./fixing-interview.component.scss'],
})
export class FixingInterviewComponent implements OnInit {
  FixInterviewForm = this.fb.group({
    Vacancy: [null, Validators.required],
    Candidate: [
      null,
      Validators.compose([Validators.required, Validators.email]),
    ],
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
  urlLength: number;
  Id: any;

  constructor(
    private fb: FormBuilder,
    private titleService: TitleService,
    private requirementService: RequirementStructureService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.titleService.setTitle('Schedule an Interview');
  }

  ngOnInit(): void {
    this.titleService
      .getTitle()
      .subscribe((appTitle) => (this.title = appTitle));

      this.urlLength = window.location.href.split('/').length
      console.log(this.urlLength)
      
        if (this.urlLength>5){
          this.activatedRoute.params.subscribe((params) => {
            this.Id = params.id;
          });
          this.requirementService.editSchedule(this.Id).subscribe(
            (data) => {
              this.FixInterviewForm.patchValue(data);
              console.log(this.FixInterviewForm)
            },
            (err) => {}
          );
        }
        
  }
  onSubmit() {
    if (this.FixInterviewForm.valid) {
      this.requirementService
        .fixInterview(this.FixInterviewForm.value)
        .subscribe((data) => {
          if (data.message) {
            this._snackBar.open(data.message, 'OK', {
              duration: 2000,
            });
          }
          this.FixInterviewForm.reset();
        });
    }
  }
  
}
