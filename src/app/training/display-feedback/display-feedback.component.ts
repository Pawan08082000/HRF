import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-display-feedback',
  templateUrl: './display-feedback.component.html',
  styleUrls: ['./display-feedback.component.scss']
})
export class DisplayFeedbackComponent implements OnInit {

  @Input() feed: number

  feedChanged
  
  constructor(
    private training: TrainingService
  ) { }

  ngOnInit(): void {
    this.training.feedbacks(this.feed).subscribe(
      (data) => {
        
        if(data[0]._id == this.feed) 
        {
          this.feedChanged = data[0].Feedback
          console.log(this.feedChanged)
        }
  
      }
    )
  }

}
