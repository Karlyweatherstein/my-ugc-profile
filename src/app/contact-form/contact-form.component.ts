import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {



  
  constructor() { 

    let submitBtn = document.querySelector("#submitBtn");
    let first = document.querySelector("#first");
    let last = document.querySelector("#last");
    let email = document.querySelector("#email");
    let message = document.querySelector("#message");



    function submitForm() {
      console.log("Button has been clicked")
    }

  }

  ngOnInit(): void {
  }

}


