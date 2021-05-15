import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainingService } from 'src/app/services/training.service';
import * as json_data from '../training.json';

@Component({
  selector: 'app-view-training',
  templateUrl: './view-training.component.html',
  styleUrls: ['./view-training.component.scss']
})
export class ViewTrainingComponent implements OnInit {

  trainings = [];

  constructor(
    private fb: FormBuilder,
    private trainingService: TrainingService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.trainingService.trainings().subscribe((data) =>
    {
      console.log(data)
      for(let i in data){
        this.trainings.push({
          Id: data[i]._id,
          Description : data[i].Description,
          Trainer : data[i].Trainer,
          TrainingName: data[i].TrainingName,
        
        })
      }
    })
  }

  
  Feedback(){
    console.log('Submitted')
    this.route.navigateByUrl("/training/trainingFeedback")

  }

  apply(){
    console.log('Submitted')
  }

}
