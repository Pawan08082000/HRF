import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.scss'],
})
export class ShowEmployeesComponent implements OnInit {
  ELEMENT_DATA = [];
  id;
  displayedColumns: string[] = [
    'EmployeeName',
    'EmailId',
    'Company',
    'Department',
    'Designation',
    'WorkType',
    'ReportedTo',
    'Edit'
  ];
  dataSource: any;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    var arr = this.router.url.split('/');
    if (arr.length == 5) {
      this.searchResults(arr[4].slice(15));
    } else {
      this.employeeService.showEmployee().subscribe((data) => {
        console.log(data);

        for (let i in data) {
          this.id = data[i]._id;
          this.ELEMENT_DATA.push({
            Company: data[i].Company,
            EmployeeName: data[i].EmployeeName,
            Department: data[i].Department,
            EmailId: data[i].Email,
            Designation: data[i].Designation,
            WorkType: data[i].WorkType,
            ReportedTo: data[i].ReportingTo,
            Id: data[i]._id,

            // Edit: "flight_land"
          });
        }
        console.log(this.ELEMENT_DATA);
        this.dataSource = this.ELEMENT_DATA;
      });
    }
  }

  editEmployee(object) {
    this.router.navigateByUrl(`/menuMaster/emplMaster/empDetails/${object.Id}`)
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  searchResults(items) {
    this.employeeService.searchEmployee(items).subscribe(
      (data) => {
        console.log(data);
        var elements = [];
        for (let i in data) {
          elements.push({
            EmployeeCode: data[i].EmployeeId,
            EmployeeName: data[i].EmployeeName,
            Department: data[i].Department,
            EmailId: data[i].Email,
            Designation: data[i].Designation,
            WorkType: data[i].WorkType,
            ReportedTo: data[i].ReportingTo,
            // Edit: "flight_land"
          });
        }
        this.dataSource = elements;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
