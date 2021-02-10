import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import {HrRolesService} from '../../services/hr-roles.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  roles:any;

  constructor(private hrroleService: HrRolesService) {}

  ngOnInit(): void {
    this.hrroleService.gethrRoles().subscribe(data =>{
      this.roles = data
      console.log(this.roles, data)
    },
    (err=>{
      console.log(err)
    }))
  }

}
