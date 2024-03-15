import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit {

  testResult: any;

  constructor(private navigationService: NavigationService){

  }
  

  ngOnInit(): void {

  }

  MakeTestPost() {
    this.navigationService.DoSetup().subscribe({
      next: (x) =>{
        this.testResult = x;
        var okay = "";
      },
      error: (err) => {
        console.error('Error', err);
      },
      complete: () => {
        console.log('Completed');
      }
    })
  }

}
