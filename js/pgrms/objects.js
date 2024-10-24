let emp=[
    {
        "name": "Alice Smith",
        "age": 30,
        "empId": "E001"
    },
    {
        "name": "Bob Johnson",
        "age": 25,
        "empId": "E002"
    },
    {
        "name": "Charlie Brown",
        "age": 28,
        "empId": "E003"
    },
    {
        "name": "Diana Prince",
        "age": 32,
        "empId": "E004"
    },
    {
        "name": "Edward Davis",
        "age": 29,
        "empId": "E005"
    }
]

const newEmp=emp.map((value)=>{
    let age= value.age>30
    return age;
});

console.log(newEmp);