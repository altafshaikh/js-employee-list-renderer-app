var employees = []
var id;
var email;

var Employee = function(firstname, lastname, age, city, pincode, country){
    this.emp_id = Math.floor(Math.random() * 10000);
    id =this.emp_id ;
    this.firstName = firstname;
    this.lastName = lastname;
    this.company = "surfboard";
    this.email = this.firstName+'.'+this.lastName+'@'+this.company+'.com';
    email = this.email;
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

function findById(id) {
    
    let result = employees.find(function(emp){

        return emp.emp_id == id;
    })

   return result;

}

console.log(findById(id));

function findByEmail(email){
    
    let result = employees.find(function(emp){

        return emp.email == email;
    })

   return result;
}

console.log(findByEmail(email));

