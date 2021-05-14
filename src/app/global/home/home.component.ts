import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {HrRolesService} from '../../services/hr-roles.service'
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  roles:any;
  deviceXs: Boolean;
  mediaSub: Subscription;


  constructor(private hrroleService: HrRolesService,
    private route: Router,public mediaObserver: MediaObserver) {}

  ngOnInit(): void {
    this.hrroleService.gethrRoles().subscribe(data =>{
      this.roles = data
    },
    (err=>{
      console.log(err)
    }))
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
      }
    );
  }

  navigation(role){
    if(role.title == "Menu Master"){
      this.route.navigateByUrl("/menuMaster/emplMaster/emplSearch")
    }
    if(role.title == "Self Portal")
      this.route.navigateByUrl("/selfPortal/leaveReq/form")
    if(role.title == "Requirment Structure")
      this.route.navigateByUrl("/reqStr/viewJobVacancies")

    if(role.title == "Training Module")
      this.route.navigateByUrl("/training/trainingFeedback")
    

          if(role.title == "Organization Structure")
          this.route.navigateByUrl("/orgStr/chart")

  }
}
