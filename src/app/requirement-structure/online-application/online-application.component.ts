import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-online-application',
  templateUrl: './online-application.component.html',
  styleUrls: ['./online-application.component.scss']
})
export class OnlineApplicationComponent implements OnInit {

  
  ApplyForm = this.fb.group({
    FirstName: [null, Validators.required],
    LastName: [null, Validators.required],
    Email: [null, Validators.required],
    Phone: [null, Validators.required],
    Position: [null, Validators.required],
    Website: [null],
    Salary: [null],
    Notice: [null],
    relocate: [null],
    Comments: [null],
    LastCompany:[null]
  });
  title: String;
  
  constructor(
    private fb: FormBuilder,
    private titleService: TitleService
  ) {
    this.titleService.setTitle('Apply');

   }

  ngOnInit(): void {
    
    this.titleService
      .getTitle()
      .subscribe((appTitle) => (this.title = appTitle));

  }

  onSubmit(){
    console.log("submitted")
  }
}
