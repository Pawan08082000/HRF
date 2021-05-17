import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from 'src/app/services/title.service';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-training-feedback',
  templateUrl: './training-feedback.component.html',
  styleUrls: ['./training-feedback.component.scss']
})
export class TrainingFeedbackComponent implements OnInit {

  @Input() count: number;

  TrainingFeedbackForm = this.fb.group({
    Employee: [null, Validators.required],
    Feedback: [null, Validators.required],
   
  });
  title: String;
  urlLength: number;
  Id: any;
  
  constructor(
    private fb: FormBuilder,
    private titleService: TitleService,
    private trainingService: TrainingService,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute

    
  ) {
    this.titleService.setTitle('Training Feedback');

   }

  ngOnInit(): void {
    this.Id = this.count
    this.titleService
    .getTitle()
    .subscribe((appTitle) => (this.title = appTitle));

}

  onSubmit(){
    console.log("submitted")
    if(this.TrainingFeedbackForm.valid){
      this.trainingService.addFeedback(this.Id, this.TrainingFeedbackForm.value).subscribe(
        (data) => {
          if (data.message) {
            this._snackBar.open(data.message, 'OK', {
              duration: 2000,
            });
          }
        }
      )
    }
  }

}
