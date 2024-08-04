import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in-sing-up-page',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './log-in-sing-up-page.component.html',
  styleUrl: './log-in-sing-up-page.component.css'
})
export class LogInSingUpPageComponent implements OnInit{

  password!:string;
  email!:string;
  emailForm = new FormControl('');
  myForm!:FormGroup;
  constructor(private formBuilder:FormBuilder){
  }
  


  ngOnInit(){
    this.myForm=this.formBuilder.group({
      email: "",
      password: ""
      
    })
    this.myForm.valueChanges.subscribe(console.log)
  }
    

  setPassword(){
    
    console.log(this.password)

  }
  setEmail(){
    console.log(this.emailForm.value)
    // console.log(this.email)
  }
  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      // כאן תוכל לשלוח את הנתונים לשרת
    }
  }

}
