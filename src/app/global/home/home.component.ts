import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {HrRolesService} from '../../services/hr-roles.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  roles:any;

  constructor(private hrroleService: HrRolesService,
    private route: Router) {}

  ngOnInit(): void {
    this.hrroleService.gethrRoles().subscribe(data =>{
      this.roles = data
      console.log(this.roles, data)
    },
    (err=>{
      console.log(err)
    }))
  }

  navigation(role){
    if(role.title == "Menu Master"){
      this.route.navigateByUrl("/menuMaster/emplMaster/emplSearch")
    }
    if(role.title == "Self Portal")
      this.route.navigateByUrl("/selfPortal/leaveReq/form")
    if(role.title == "Requirment Structure")
      this.route.navigateByUrl("/reqStr/viewJobVacancies")
          if(role.title == "Organization Structure")
          this.route.navigateByUrl("/orgStr/payHead")
  }
}
