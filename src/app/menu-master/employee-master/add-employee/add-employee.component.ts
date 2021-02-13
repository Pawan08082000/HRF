import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { EmployeeService } from 'src/app/services/employee.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  title: String;

  AddEmployeeForm = this.fb.group({
    // basic Information
    EmployeeName: [null, Validators.required],
    Company: [null, Validators.required],
    Department: [null, Validators.required],
    Designation: [null, Validators.required],
    Email: [null, Validators.required],
    JoiningDate: [null, Validators.required],
    ReportingTo: [null, Validators.required],
    DOB: [null, Validators.required],
    WorkType: [null, Validators.required],

    // Work Information
    EmploymentType: [null, Validators.required],
    OfficeBranch: [null, Validators.required],
    EmployeeGrade: [null, Validators.required],
    EmployeeGroup: [null, Validators.required],
    EmployeeType: [null, Validators.required],
    Value: [null, Validators.required],
    EffectiveDate: [null, Validators.required],
    PF: [null, Validators.required],
    ESI: [null, Validators.required],
    CIN: [null, Validators.required],
    LeavingDate: [null, Validators.required],
    Address: [null, Validators.required],
    Description: [null, Validators.required],
    
    // Banking Information
    BankAccount: [null, Validators.required],
    BankName: [null, Validators.required],
    BankBranch: [null, Validators.required],
    IFSC: [null, Validators.required],
    PaymentType: [null, Validators.required],
    PAN: [null, Validators.required],

    // Emergency Contact Information
    ContactName: [null, Validators.required],
    ContactMobile: [null, Validators.required],
    ContactEmail: [null, Validators.required],
    ContactAddress: [null, Validators.required],

  });
  departments: Object;
  workTypes: Object;
  
  constructor(
    private titleService: TitleService,
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {
    this.titleService.setTitle("AddEmployee")
   }

  ngOnInit(): void {
    this.titleService.getTitle().subscribe(appTitle => this.title = appTitle);
    
    // get all the departments
    this.employeeService.departments().subscribe(
      data => {
        this.departments = data;
    })

    // get workTypes
    this.employeeService.workTypes().subscribe(
      data => {
        this.workTypes = data;
    })
  }

  save(){
    console.log(this.AddEmployeeForm.value)

    this.employeeService.addEmployee(this.AddEmployeeForm.value).subscribe(
      data => {
    console.log('data saved')
        
      }
    )

  }

  back(){
    console.log('go to previous slide')
  }
}
