import { EmployeeService } from 'src/app/services/employee.service';
import { Component, OnInit, OnChanges, SimpleChanges, PipeTransform } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import * as json_data from '../../../menu-master/employee-master/add-employee/addEmployee.json';
import { DateDifferencePipe } from '../../../_helpers/pipes/date-difference.pipe';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.scss'],
  providers: [ DateDifferencePipe ]
})
export class LeaveFormComponent implements OnInit {

  empName;
  department;
  constructor(private dateDiff : DateDifferencePipe, private fb : FormBuilder, private empService : EmployeeService) { }

  leaveForm = this.fb.group({
    SelectEmp: [null, Validators.required],
    LeaveApprover: [null, Validators.required],
    LeaveType: [null, Validators.required],
    AvailableBalance: [{value:10, disabled: true}],
    LeaveFor: [null, Validators.required],
    StartDate: [null, Validators.required],
    EndDate: [null, Validators.required],
    StartTime: [null, Validators.required],
    EndTime: [null, Validators.required],
    Days: [{value:'',disabled: true}],
    ReasonForLeave: [null, Validators.required],

  });
  departments = json_data.Department;
  LeaveFor;
  matAutocomplete;
  
  ngOnInit(): void {
    this.getDepartment()
    console.log(this.leaveForm.valueChanges)
    
  }

  getDepartment(){
    this.empService.getDepartment().subscribe((data)=>{
      this.department = data
    },
    (err)=>{
      console.log(err);
    })
  }
  onChangeDepartment(){
    if(this.leaveForm.value.LeaveApprover){
    this.empService.getEmployeeName(this.leaveForm.value.LeaveApprover).subscribe((data)=>{
      this.empName = data
    },
    (err)=>{
      console.log(err);
    })}
  }
  onChangeDate(){
    console.log('hwllo')
    this.leaveForm.setValue({days : this.dateDiff.transform(this.leaveForm.value.StartDate,this.leaveForm.value.EndDate)})
    console.log(this.leaveForm.value.Days)
  }
  changing(){
    console.log('jhbviebiebvoeiuvbo')
  }
   onSubmit(){

  }

}
