import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm = this.fb.group({
    email: [null, Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
onSubmit(){
  alert('Instructions sent on mail')
}
}
