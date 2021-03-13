import { Component, OnInit } from '@angular/core';
import { RequirementStructureService } from 'src/app/services/requirement-structure.service';

@Component({
  selector: 'app-view-interviews',
  templateUrl: './view-interviews.component.html',
  styleUrls: ['./view-interviews.component.scss']
})
export class ViewInterviewsComponent implements OnInit {

  data;
  constructor(
    private requirementService: RequirementStructureService
  ) { }

  ngOnInit(): void {
    this.requirementService.getSchedules().subscribe(data =>{
      console.log(data)
      this.data = data
    })
  }

}
