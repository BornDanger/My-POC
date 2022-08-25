import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { create } from '../services/getuser'
import { CreateService } from '../services/create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder,private http:HttpClient,public cs:CreateService) { }

  myForm: FormGroup = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    dob: new FormControl('2000-01-01'),
  });
  
  users: create[] = [];
  
  onSubmit(value:any){
    console.log("Clicked Create");
    console.log(value);
    this.cs.createUser(value);
  }

  ngOnInit(): void {
    this.cs.getCreatedUsers().subscribe((data:any)=>{
      this.users = data;
    }) 
  }

}
