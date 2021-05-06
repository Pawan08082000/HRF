import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { RequirementStructureService } from 'src/app/services/requirement-structure.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-online-application',
  templateUrl: './online-application.component.html',
  styleUrls: ['./online-application.component.scss']
})
export class OnlineApplicationComponent implements OnInit {

  
  ApplyForm = this.fb.group({
    FirstName: [null, Validators.required],
    LastName: [null, Validators.required],
    Email: [null, Validators.required],
    Phone: [null, Validators.required],
    Position: [null, Validators.required],
    Website: [null],
    Salary: [null, Validators.required],
    Notice: [null],
    relocate: [null],
    Comments: [null],
    LastCompany:[null],
    Resume: [null, Validators.required]
  });
  title: String;
  
  Resume;
  ResumeName;
  Id: any;

  constructor(
    private fb: FormBuilder,
    private titleService: TitleService,
    private requirementService: RequirementStructureService,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) {
    this.titleService.setTitle('Apply');

   }

  ngOnInit(): void {
    
    this.titleService
      .getTitle()
      .subscribe((appTitle) => (this.title = appTitle));

      this.activatedRoute.params.subscribe((params) => {
        this.Id = params.id;
        this.ApplyForm.patchValue({Position: this.Id})
        // console.log(params.id)
      });
  }

  onSubmit(){

    if (this.ApplyForm.valid && this.Resume) {
      const formData = new FormData();

        formData.append("file", this.Resume);
        formData.append("FirstName", this.ApplyForm.get('FirstName').value);
        formData.append("LastName", this.ApplyForm.get('LastName').value);
        formData.append("Email", this.ApplyForm.get('Email').value);
        formData.append("Phone", this.ApplyForm.get('Phone').value);
        formData.append("Position", this.ApplyForm.get('Position').value);
        formData.append("Website", this.ApplyForm.get('Website').value);
        formData.append("Salary", this.ApplyForm.get('Salary').value);
        formData.append("Notice", this.ApplyForm.get('Notice').value);
        formData.append("relocate", this.ApplyForm.get('relocate').value);
        formData.append("Comments", this.ApplyForm.get('Comments').value);
        formData.append("LastCompany", this.ApplyForm.get('LastCompany').value);
        formData.append("Resume", this.ApplyForm.get('Resume').value);

      this.requirementService
        .jobApply(formData)
        .subscribe((data) => {
          if (data.message) {
            this._snackBar.open(data.message, 'OK', {
              duration: 2000,
            });
          }
          this.ApplyForm.reset();
        });
    }
  }

  onFileSelected(event) {

    const file:File = event.target.files[0];

    if (file) {

        this.Resume = file;
        this.ResumeName = file.name
       
    }
}
}
