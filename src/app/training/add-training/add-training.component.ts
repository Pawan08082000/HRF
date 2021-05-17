import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TitleService } from 'src/app/services/title.service';
import { TrainingService } from 'src/app/services/training.service';
import * as json_data from '../training.json';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss'],
})
export class AddTrainingComponent implements OnInit {
  TrainingForm = this.fb.group({
    TrainingName: [null, Validators.required],
    Trainer: [null, Validators.required],
    Description: [null, Validators.required],
  });
  TrainingName = json_data.TrainingName;
  title: String;

  constructor(
    private fb: FormBuilder,
    private titleService: TitleService,
    private trainingService: TrainingService,
    private _snackBar: MatSnackBar,

  ) {
    this.titleService.setTitle(' Add Training');
  }

  ngOnInit(): void {
    this.titleService
      .getTitle()
      .subscribe((appTitle) => (this.title = appTitle));
  }

  onSubmit() {
    console.log(this.TrainingForm.value);
    if (this.TrainingForm.valid) {
      this.trainingService
        .addTraining(this.TrainingForm.value)
        .subscribe((data) => {
          if (data.message) {
            this._snackBar.open(data.message, 'OK', {
              duration: 2000,
            });
          }
        });
    }
  }
}
