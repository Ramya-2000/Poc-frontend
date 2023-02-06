import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-signup',
    templateUrl:'./signup.component.html',
    styleUrls: ['./signup.component.css']

})

export class SignUpPage implements OnInit{

signUpPage!:FormGroup
constructor(private formBuilder:FormBuilder){}


ngOnInit(): void {
    this.signUpPage=this.formBuilder.group({
        'username':['', Validators.required],
        'email':['',Validators.required],
        'password':['',Validators.required],
        'phone number':['',Validators.required],
    })
    
}
get formControls(){
    return this.signUpPage.controls

}
submitSignUpDetails(){
    console.log(this.signUpPage);

}
}
