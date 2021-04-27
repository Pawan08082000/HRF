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
    Salary: [null],
    Notice: [null],
    relocate: [null],
    Comments: [null],
    LastCompany:[null],
    Resume: [null, Validators.required]
  });
  title: String;
  
  fileName = '';
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
    // console.log("submitted")
    console.log(this.ApplyForm)
    if (this.ApplyForm.valid) {
      this.requirementService
        .jobApply(this.ApplyForm.value)
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

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("resume", file);
        // console.log("uploaded")
        // const upload$ = this.http.post("/api/thumbnail-upload", formData);

        // upload$.subscribe();
    }
}
}
