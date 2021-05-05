import { OrgsStructService } from './../../services/orgs-struct.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  message;

  noticeForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
    noticeDate: [null, Validators.required],
  });
  constructor(    private fb: FormBuilder,
    private orgsService : OrgsStructService,
    private _snackBar: MatSnackBar
    ) { }
  ngOnInit(): void {

  }
  onSubmit(){
    if (!this.noticeForm.invalid){
      console.log(this.noticeForm.value)
      this.orgsService.insertNotice(this.noticeForm.value).subscribe(
        (data) => {
          if (data.message) {
            this._snackBar.open(data.message, 'OK', {
              duration: 2000,
            });


          }
          this.noticeForm.reset()
        })
    }
  }

}
