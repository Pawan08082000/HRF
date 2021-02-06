import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  
  resetForm = this.fb.group({
    orgpassword:[null, Validators.required],
    password: [null, Validators.required],
    cnfpassword: [null, Validators.required],
  
  });
  constructor(private fb: FormBuilder, private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Change Password');

  }
  onSubmit(){
    alert('Instructions sent on mail')
  }
}
