import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequirementStructureService } from 'src/app/services/requirement-structure.service';

@Component({
  selector: 'app-view-interviews',
  templateUrl: './view-interviews.component.html',
  styleUrls: ['./view-interviews.component.scss']
})
export class ViewInterviewsComponent implements OnInit {

  data;
  constructor(
    private requirementService: RequirementStructureService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.requirementService.getSchedules().subscribe(data =>{
      console.log(data)
      this.data = data
    })
  }

  viewInterviews() {
    console.log("line 64")
    this.router.navigateByUrl('/reqStr/fixInterview');
  }

  editSchedule(object){
    console.log("edit")
    this.router.navigateByUrl(`/reqStr/editSchedule/${
      object
    }`)
  }
}
