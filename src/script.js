var employees = []

var Employee = function(firstname, lastname, age, city, pincode, country){
    this.emp_id = Math.floor(Math.random() * 10000);
    this.firstName = firstname;
    this.lastName = lastname;
    this.company = "surfboard";
    this.email = this.firstName+'.'+this.lastName+'@'+this.company+'.com';
    this.age = age;
    this.address = [{
        city: city,
        pincode: pincode,
        country: country,
      }]
}

function generateEmployeeList(int){

    for(var i=0;i<int;i++){

        firstName = faker.name.firstName();
        lastName =faker.name.lastName()
        age = Math.floor(Math.random() * 100);
        city = faker.address.city();
        pincode = faker.address.zipCode();
        country = faker.address.country();
        
        //creating object of class Employee and storing in employees array
        let emp = new Employee(firstName,lastName,age,city,pincode,country);
        employees.push(emp);

    }
} 

generateEmployeeList(10);
console.log(employees)