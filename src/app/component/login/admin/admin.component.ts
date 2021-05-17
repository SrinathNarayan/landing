import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  adminForm!: FormGroup;
  submitted:boolean=false;
  
  constructor(private fb:FormBuilder,private route:Router) { }
  loginForm:FormGroup =new FormGroup({
    username:new FormControl ('',
    Validators.compose([
    Validators.required,
    Validators.pattern('[a-zA-Z]+')
  ])),

   password: new FormControl('',
    Validators.compose([
    Validators.required,
    Validators.pattern('[a-zA-Z]+')
  ]))
});
  
  ngOnInit(): void {
      this.adminForm=this.fb.group({
        firstName:['',Validators.pattern("[a-zA-Z]+")],
        pwd:['',Validators.pattern("(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}")]
      })
  }
  get f() { return this.adminForm.controls; }
 

  onSubmit()
  {
    console.log(this.loginForm.value);
    if(this.loginForm.invalid)
    {
      Swal.fire("error"," Enter Valid Data","error");
      return;
    }
    if(this.loginForm.valid)
    {
      this.route.navigate(['/admindesk']);
      
    }
  }
}