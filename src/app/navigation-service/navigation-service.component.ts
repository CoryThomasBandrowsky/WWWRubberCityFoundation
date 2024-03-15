import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints} from './endpoints';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-navigation-service',
  templateUrl: './navigation-service.component.html',
  styleUrl: './navigation-service.component.css'
})

export class NavigationServiceComponent implements OnInit{
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    
  }

  DoSetup() {
    return this.http.get<string>(endpoints.homeController.home);
  }
}
