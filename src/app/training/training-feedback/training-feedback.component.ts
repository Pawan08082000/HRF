import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';
import * as json_data from './training.json'

@Component({
  selector: 'app-training-feedback',
  templateUrl: './training-feedback.component.html',
  styleUrls: ['./training-feedback.component.scss']
})
export class TrainingFeedbackComponent implements OnInit {

  
  TrainingFeedbackForm = this.fb.group({
    TrainingName: [null, Validators.required],
    Employee: [null, Validators.required],
    Feedback: [null, Validators.required],
   
  });
  TrainingName = json_data.TrainingName;
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
    console.log("submitted")
  }

}
