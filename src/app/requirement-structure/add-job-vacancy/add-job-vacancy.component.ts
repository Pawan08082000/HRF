import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { RequirementStructureService } from 'src/app/services/requirement-structure.service';
import { TitleService } from 'src/app/services/title.service';
// import * as json_data from './addJobVacancy.json'
@Component({
  selector: 'app-add-job-vacancy',
  templateUrl: './add-job-vacancy.component.html',
  styleUrls: ['./add-job-vacancy.component.scss']
})
export class AddJobVacancyComponent implements OnInit {

  AddJobVacancyForm = this.fb.group({
    JobTitle: [null, Validators.required],
    VacancyName: [null, Validators.required],
    HiringManager: [null, Validators.required],
    NoOfPositions: [null],
    JobLocation: [null, Validators.required],
    Active: [null, Validators.required],
    JobDescription: [null, Validators.required],
    
  });
  // jobTitle = json_data.JobTitle;

  title: String;
  urlLength: number;
  Id: any;
  constructor(
    private fb: FormBuilder,
    private titleService: TitleService,
    private requirementService: RequirementStructureService,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute

  ) {
    this.urlLength = window.location.href.split('/').length
    if(this.urlLength > 5) {
    this.titleService.setTitle('Edit Vacancy');

    } else this.titleService.setTitle('Add Job Vacancy');

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
        this.requirementService.editVacancy(this.Id).subscribe(
          (data) => {
            this.AddJobVacancyForm.patchValue(data);
            console.log(this.AddJobVacancyForm)
          },
          (err) => {}
        );
      }
      
  }

  onSubmit(){
    if(this.AddJobVacancyForm.valid){
      this.requirementService.addJobVacancies(this.AddJobVacancyForm.value).subscribe(
        (data) => {
          if (data.message) {
            this._snackBar.open(data.message, 'OK', {
              duration: 2000,
            });


          }
          this.AddJobVacancyForm.reset()
        })}
  }
}
