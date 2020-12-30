import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  
  resetForm = this.fb.group({
    password: [null, Validators.required],
    cnfpassword: [null, Validators.required],
  
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
    alert('Instructions sent on mail')
  }
}
