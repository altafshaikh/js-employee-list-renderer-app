var employees = []
var id;
var email;

var Employee = function(firstname, lastname, age, city, pincode, country){
    this.empid = Math.floor(Math.random() * 10000);
    id =this.empid ;
    this.firstName = firstname;
    this.lastName = lastname;
    this.company = "surfboard";
    this.email = this.firstName+'.'+this.lastName+'@'+this.company+'.com';
    email = this.email;
    this.age = age;
    this.address = {
        city: city,
        pincode: pincode,
        country: country,
      }
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

        return emp.empid == id;
    })

   return result;

}
console.log(findById(id));

function createEmployee(firstName,lastName){
    age = Math.floor(Math.random() * 100);
    city = faker.address.city();
    pincode = faker.address.zipCode();
    country = faker.address.country();
    
    let emp = new Employee(firstName,lastName,age,city,pincode,country);
    employees.push(emp);

    return emp;
}

console.log(createEmployee("altaf","shaikh"));


function findByEmail(email){
    
    let result = employees.find(function(emp){

        return emp.email == email;
    })

   return result;
}

console.log(findByEmail(email));

var dummy = [

    {
        firstName: "altaf",
        lastName: "shaikh",
        email: "",
        company: "", // pick randomly from [Raw Engineering, Contentstack, Surfboard]
        empid: "1", // unique employee id for each employee,
        age: "", // number
        address: {
          city: "boisar",
          pincode: "",
          country: "",
        },
    },
    {
        firstName: "aachal",
        lastName: "vartak",
        email: "",
        company: "", // pick randomly from [Raw Engineering, Contentstack, Surfboard]
        empid: "2", // unique employee id for each employee,
        age: "", // number
        address: {
          city: "virar",
          pincode: "",
          country: "",
        },
      },
      {
        firstName: "sagar",
        lastName: "vartak",
        email: "",
        company: "", // pick randomly from [Raw Engineering, Contentstack, Surfboard]
        empid: "3", // unique employee id for each employee,
        age: "", // number
        address: {
          city: "boisar",
          pincode: "",
          country: "",
        },
      }
]

function getNestedProperty(object){

    let keys = Object.keys(object);
    let values = Object.values(object);
    // console.log(typeof(values[1]) == 'object');
    let nested_property_list = [];

    values.forEach(function(el,index){
        if(typeof(el) == 'object'){
            nested_property_list.push(keys[index])
        }
    })

    return nested_property_list;
}

function findElements(object){

    let nested_property_list = getNestedProperty(object);
    let keys = Object.keys(object);

    let result = dummy.filter(function(emp){
        let flag = true;
        keys.forEach(function(key){

            if(nested_property_list.includes(key)){
                let nested_prop = Object.keys(object[key]);
                // console.log(nested_keys);
                nested_prop.forEach(function(prop){
                    // console.log(emp[key][prop]);
                    if(emp[key][prop] === object[key][prop]){
                        return true
                    }else{
                        flag = false;
                        return false;
                    }
                })
            }else{

                if(emp[key] === object[key]){
                    return true
                }else{
                    flag = false;
                    return false;
                }
            }
        })

        if(flag==true){
            return true;
        }else{
            return false;
        }

    })

   return result;
}

console.log(findElements({firstName: "altaf",address:{city:"boisar"}}));

function findByIdAndUpdate(id,object){

    let empObj = dummy.find(function(emp){

        return emp.empid == id;
    })

    let keys = Object.keys(object);

    keys.forEach(function(key){
        empObj[key] = object[key];
    })
    
    

   return empObj;
} 

console.log(findByIdAndUpdate(3,{email:"sagar.vartak@raweng.com"}));
console.log(dummy);


function deleteById(id){

    let objIndex = dummy.findIndex(function(emp){

        return emp.empid == id;
    })

    delete dummy[objIndex];

   return dummy;
} 

console.log(deleteById(2));