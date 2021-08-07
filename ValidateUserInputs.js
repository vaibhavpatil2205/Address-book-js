class AddressBook {
    
     constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
// Getter & Setter method

get firstName() {
    return this.firstName;
  }
  set firstName(firstName) {
    let firstNameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
    if (firstNameRegex.test(firstName)) this.firstName = firstName;
    else  "Invalid First name";
  }
  get lastName() {
    return this.lastName;
  }
  set lastName(lastName) {
    let lastNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (lastNameRegex.test(lastName)) this.lastName = lastName;
    else  "Invalid Last name";
  }
  get address() {
    return this.address;
  }
  set address(address) {
    let addressRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (addressRegex.test(address)) this.address = address;
    else  "Invalid address";
  }
  get city() {
    return this.city;
  }
  set city(city) {
    let cityRegex = RegExp("^[A-Za-z]{2,}$");
    if (cityRegex.test(city)) this.city = city;
    else  "Invalid City name";
  }
  get state() {
    return this.state;
  }
  set state(state) {
    let stateRegex = RegExp("^[A-Za-z]{2,}$");
    if (stateRegex.test(state)) this.state = state;
    else  "Invalid State name";
  }
  get zip() {
    return this.zip;
  }
  set zip(zip) {
    let zipRegex = RegExp("^[0-9]{6}$");
    if (zipRegex.test(zip)) this.zip = zip;
    else  "Invalid Zipcode";
  }
  get phoneNumber() {
    return this.phoneNumber;
  }
  set phoneNumber(phoneNumber) {
    let phoneNumberRegex = RegExp("^[0-9]{2}\\s{0,1}[0-9]{10}$");
    if (phoneNumberRegex.test(phoneNumber)) this.phoneNumber = phoneNumber;
    else  "Invalid Phone Number";
  }
  get email() {
    return this.email;
  }
  set email(email) {
    let emailRegex = RegExp("^[a-zA-Z0-9_+&*#$^!-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$");
    if (emailRegex.test(this.email)) this.email = email;
    else "Invalid Email";
  }

toString() {
    return "First Name: " + this.firstName + " Last Name: " + this.lastName + " Address: " + this.address + " City: " + this.city
        + " State: " + this.state + " Zipcode: " + this.zip + " Phone Number: " + this.phoneNumber + " Email: " + this.email;
}
}
let addressBook = new AddressBook("Vaibhav", "Patil", "Csn", "Chalisgaon", 
                          "Maharastra", "556655", "959595", "vai@gmail.com");
console.log(addressBook.toString());