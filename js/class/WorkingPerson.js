class WorkingPerson {
  constructor(argFirstName, argLastName) {
    this.firstName = argFirstName;
    this.lastName = argLastName;
  }

  // get email() {
  //   const emailString = `${this.firstName}@${this.lastName}.lt`;
  //   return emailString;
  // }
  get fullName() {
    
    return `${this.firstName} ${this.lastName}`;
  }

  calcPay() {}
}


const w1 = new WorkingPerson('Algis','Rabarbaras');
console.log(w1.email);
