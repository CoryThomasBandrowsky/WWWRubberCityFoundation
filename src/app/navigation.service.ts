import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { endpoints} from './endpoints';
import { TestResponse } from './models/test-response';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private http: HttpClient){}

  DoSetup() {
    return this.http.get<TestResponse>(endpoints.homeController.home);
  }
}