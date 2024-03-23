import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrl: './users-add.component.css'
})
export class UsersAddComponent implements OnInit {

  addUserForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.addUserForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)]], // Example pattern for phone numbers
      addressLine1: [''],
      addressLine2: [''],
      city: [''],
      state: [''],
      postalCode: [''],
      country: [''],
      dateOfBirth: [null, [Validators.required]],
      memberSince: [{ value: '', disabled: true }],
      lastLogin: [{ value: '', disabled: true }],
      isActive: [true],
      userRole: [''],
      profilePictureURL: [''],
      needsHelp: [false],
      isLockedOut: [{ value: '', disabled: true }],
      isBanned: [{ value: '', disabled: true }]
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(): void {
    if (this.addUserForm.valid) {
      this.userService.CreateUser(this.addUserForm.value).subscribe({
        next: (x) =>{
          console.log('Success', x);
        },
        error: (err) =>{
          console.error('Error', err);
        },
        complete: () =>{
          console.log('Completed');
        }
      })
    }
  }

}
