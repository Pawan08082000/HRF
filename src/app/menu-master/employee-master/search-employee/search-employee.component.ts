import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss'],
})
export class SearchEmployeeComponent implements OnInit {
  searchEmployeeForm = this.fb.group({
    search: [null],
  });
  title;
  searchResult: any;

  constructor(
    private fb: FormBuilder,
    private titleService: TitleService,
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.titleService.setTitle('Employee Master');
  }

  ngOnInit(): void {
    this.titleService
      .getTitle()
      .subscribe((appTitle) => (this.title = appTitle));
  }

  onSubmit() {
    console.log(this.searchEmployeeForm.value);
    this.employeeService
      .searchEmployee(this.searchEmployeeForm.value)
      .subscribe((data) => {
        this.searchResult = data;
        this.router.navigateByUrl(`menuMaster/emplMaster/showEmployee/
    ${this.searchEmployeeForm.value.search}`);
      });
  }
  viewAll() {
    console.log('log view');
  }

  addEmployee() {
    this.router.navigateByUrl('menuMaster/emplMaster/addEmployee');
  }
}
