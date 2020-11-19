var employees = []

var Employee = function(firstname, lastname, age, city, pincode, country){
    this.empid = Math.floor(Math.random() * 10000);
    this.firstName = firstname;
    this.lastName = lastname;
    this.company = "surfboard";
    this.email = this.firstName+'.'+this.lastName+'@'+this.company+'.com';
    this.age = age;
    this.address = {
        city: city,
        pincode: pincode,
        country: country,
      }
}

const generateEmployeeList = (int) => {

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
console.log("generated list",employees)

const findById = (id) => {
    
    return employees.find((emp) => {
        return emp.empid == id;
    })
}
console.log("find by id",findById(employees[0].empid));


const createEmployee = (firstName,lastName) => {
    age = Math.floor(Math.random() * 100);
    city = faker.address.city();
    pincode = faker.address.zipCode();
    country = faker.address.country();
    
    let emp = new Employee(firstName,lastName,age,city,pincode,country);
    employees.push(emp);

    return emp;
}

console.log("Created",createEmployee("altaf","shaikh"));


const findByEmail = (email) => {
    
    return employees.find((emp) => {
        return emp.email == email;
    })
}

console.log("find by email",findByEmail(employees[0].email));

const getNestedProperty = (object) => {

    let nested_property_list = [];

    for (const property in object) {
        if(typeof(object[property]) == 'object'){
            nested_property_list.push(property);
        }       
    }

    return nested_property_list;
}

const findElements = (object) => {
    //get list of nested property
    let nested_property_list = getNestedProperty(object);
    let keys = Object.keys(object);

    return employees.filter((emp) => {
        //flag to keep track if an emp obj satisfys all condition or not
        let flag = true;

        keys.forEach((key) => {
            if(nested_property_list.includes(key)){
                let nested_prop = Object.keys(object[key]);
                nested_prop.forEach((prop) => {
                    // emp[key][prop] to access array value
                    if(emp[key][prop] === object[key][prop]){
                        return true  //foreach expect a return value
                    }else{
                        flag = false;
                        return false; //foreach expect a return value
                    }
                })
            }else{

                if(emp[key] === object[key]){
                    return true //foreach expect a return value
                }else{
                    flag = false;
                    return false; //foreach expect a return value
                }
            }
        })

        if(flag==true){
            return true; // current emp obj statisfy all condition
        }else{
            return false; // current emp obj does not statisfy all condition
        }

    })
}

console.log("find element",findElements({firstName: "altaf"}));

const findByIdAndUpdate = (id,updateObject) => {

    let empObj = employees.find((emp) => {
        return emp.empid == id;
    })

    let keys = Object.keys(updateObject);

    keys.forEach((key) => {
        if(Object.keys(empObj).includes(key))
            empObj[key] = updateObject[key];
    })

   return empObj;
} 

console.log("updated obj",findByIdAndUpdate(employees[0].empid,{email:"sagar.vartak@raweng.com",phone:"00000"}));
console.log("after update",employees);


const deleteById = (id) => {

    let objIndex = employees.findIndex((emp) => {
        return emp.empid == id;
    })

    // delete dummy[objIndex] will only delete the reference
    employees.splice(objIndex,1);

   return employees;
} 
console.log("after delete",deleteById(employees[4].empid));


const addEmployeeToDom = (emp) => {
    const p = document.createElement("p");
    let name = `${emp.firstName} ${emp.lastName}`;
    p.innerHTML = name;
    p.setAttribute("id",emp.empid);
    let div = document.getElementById("root");
    div.appendChild(p);
}

addEmployeeToDom(employees[0]);

employees.forEach((emp)=>{
    addEmployeeToDom(emp);
})