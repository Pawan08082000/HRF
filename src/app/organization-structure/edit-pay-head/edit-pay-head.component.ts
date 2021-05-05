import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-pay-head',
  templateUrl: './edit-pay-head.component.html',
  styleUrls: ['./edit-pay-head.component.scss']
})
export class EditPayHeadComponent implements OnInit {
  message;

  payHeadForm = this.fb.group({
    payHead: [null, Validators.required],
    type: [null, Validators.required],
    shortCode: [null, Validators.required],
    calculatedType: [null, Validators.required],
    value: [null, Validators.required],

  });

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
  }
  onSubmit(){

  }
}
