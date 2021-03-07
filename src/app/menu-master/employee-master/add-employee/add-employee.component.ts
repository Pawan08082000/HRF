import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { EmployeeService } from 'src/app/services/employee.service';
import { TitleService } from 'src/app/services/title.service';
import * as json_data from './addEmployee.json';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  title: String;
  isLinear = false;

  AddEmployeeForm = this.fb.group({
    // basic Information
    EmployeeName:[null, Validators.required],
    Company: [null, Validators.required],
    Department: [null, Validators.required],
    Designation: [null, Validators.required],
    Email: [null, Validators.compose([Validators.required, Validators.email])],
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
    LeavingDate: [null],
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
    ContactMobile: [null, Validators.compose(
      [Validators.required]
      )],
    ContactEmail: [null, Validators.compose([
      Validators.required, Validators.email
    ])],
    ContactAddress: [null, Validators.required],
  });
  departments = json_data.Department;
  workTypes = json_data.WorkType;
  companies = json_data.Company;
  designation = json_data.Designation;
  reportedTo = json_data.ReportedTo;
  employmentType = json_data.EmploymentType;
  officeBranch = json_data.OfficeBranch;
  employeeGrade = json_data.EmployeeGrade;
  employeeGroup = json_data.EmployeeGroup;
  employeeType = json_data.EmployeeType;
  paymentOptions = json_data.PaymentOptions;
  errorMessage: any;
  empId;
  employee;
  urlLength;

  constructor(
    private router : Router,
    private activatedRoute: ActivatedRoute,
    private titleService: TitleService,
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private _snackBar: MatSnackBar
  ) {
    this.titleService.setTitle('AddEmployee');
  }

  ngOnInit(): void {
    this.urlLength = window.location.href.split('/').length
    this.titleService
      .getTitle()
      .subscribe((appTitle) => (this.title = appTitle));
    if (this.urlLength>6){
      this.activatedRoute.params.subscribe((params) => {
        this.empId = params.id;
      });
      this.employeeService.getEmployee(this.empId).subscribe(
        (data) => {
          this.AddEmployeeForm.patchValue(data);
          console.log(this.AddEmployeeForm)
        },
        (err) => {}
      );
    }
  }

  save() {
    if(this.AddEmployeeForm.valid){
    this.employeeService.addEmployee(this.AddEmployeeForm.value).subscribe(
      (data) => {
        if (data.message) {
          this._snackBar.open(data.message, 'OK', {
            duration: 2000,
          });
        }
    if (this.urlLength>6){

        this.router.navigate(['/menuMaster/emplMaster/empDetails/'+this.empId]);
    }
    else this.router.navigateByUrl('/menuMaster/emplMaster/emplSearch')
    this.AddEmployeeForm.reset()
      },
      (err) => {
        if (err.error == 'Fill all the required fields') {
          this._snackBar.open(err.error, 'ok', {
            duration: 2000,
          });
        } else {
          this.errorMessage = err.error._message;
          this._snackBar.open(this.errorMessage, 'OK', {
            duration: 2000,
          });
        }
      }
    );
    }
  }

  back() {
    console.log('go to previous slide');
  }
}
