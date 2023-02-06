import { Component, OnInit } from "@angular/core";   
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-login-component',
    templateUrl:'./login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginPage implements OnInit{
    loginPage!: FormGroup;
constructor(private formbuilder :FormBuilder){}


ngOnInit(): void {   
    // this.loginPage = new FormGroup({
    //     'email': new FormControl(),
    //     'password': new FormControl(),
    // })
    this.loginPage = this.formbuilder.group({
        'email': ['', Validators.required,Validators.email],
        'password':['', Validators.required,Validators.nullValidator]
    })
    }
    get formControls(){
        return this.loginPage.controls
    }
    submitLoginDetails(){
        console.log(this.loginPage);
    
}

}

