export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    passwordSalt: string;
    passwordHash: string;
    phoneNumber: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    dateOfBirth: Date;
    memberSince: Date;
    lastLogin: Date;
    isActive: boolean;
    userRole: string;
    profilePictureURL: string;
    needsHelp: boolean;
    isLockedOut: boolean;
    isBanned: boolean;
  
    constructor(
      id: number,
      firstName: string,
      lastName: string,
      email: string,
      passwordSalt: string,
      passwordHash: string,
      phoneNumber: string,
      addressLine1: string,
      addressLine2: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      dateOfBirth: Date,
      memberSince: Date,
      lastLogin: Date,
      isActive: boolean,
      userRole: string,
      profilePictureURL: string,
      needsHelp: boolean,
      isLockedOut: boolean,
      isBanned: boolean
    ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.passwordSalt = passwordSalt;
      this.passwordHash = passwordHash;
      this.phoneNumber = phoneNumber;
      this.addressLine1 = addressLine1;
      this.addressLine2 = addressLine2;
      this.city = city;
      this.state = state;
      this.postalCode = postalCode;
      this.country = country;
      this.dateOfBirth = dateOfBirth;
      this.memberSince = memberSince;
      this.lastLogin = lastLogin;
      this.isActive = isActive;
      this.userRole = userRole;
      this.profilePictureURL = profilePictureURL;
      this.needsHelp = needsHelp;
      this.isLockedOut = isLockedOut;
      this.isBanned = isBanned;
    }
  }
  