import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequirementStructureService } from 'src/app/services/requirement-structure.service';

@Component({
  selector: 'app-view-job-vacancy',
  templateUrl: './view-job-vacancy.component.html',
  styleUrls: ['./view-job-vacancy.component.scss']
})
export class ViewJobVacancyComponent implements OnInit {

 Data = []

  constructor(
    private requirementService: RequirementStructureService,
    private route: Router 
  ) { }

  ngOnInit(): void {
    this.requirementService.getJobVacancies().subscribe(data => {
      console.log(data)
      for(let i in data){
        this.Data.push({
        HiringManager : data[i].HiringManager,
        JobDescription : data[i].JobDescription,
        JobLocation: data[i].JobLocation,
        JobTitle: data[i].JobTitle,
        NoOfPosition: data[i].NoOfPosition,
        VacancyName: data[i].VacancyName
        })
      }
      console.log(this.Data)
    })
  }

  AddJobVacancy(){
    this.route.navigateByUrl("/requirementStructure/addJobVacancy")

  }

  FixInterview(){
    this.route.navigateByUrl("/requirementStructure/fixInterview")
  }
}
