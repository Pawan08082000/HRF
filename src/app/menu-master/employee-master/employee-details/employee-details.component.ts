import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee;
  empId;
  constructor(
    private activatedRoute: ActivatedRoute,
    private empService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.empId = params.id;
    });
    this.empService.getEmployee(this.empId).subscribe(
      (data) => {
        this.employee = data;
      },
      (err) => {}
    );
  }
}
