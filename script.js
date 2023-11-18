const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach((element, i) => {
        if(data[i].profession == "developer"){
            console.log(element);
        }
    })
  }
  
  // 2. Add Data
  function addData() {
    let user = prompt("Enter Name, Age & Profession");
    let str = user.split(' ');
    let temp = {name: str[0], age: Number(str[1]), profession: str[2]};
    data.push(temp);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data.forEach((element,i) => {
        if(element.profession == 'admin'){
            console.log(data.splice(i,1));
        }
    });
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyData = [
      { name: "Saurabh", age: 22, profession: "developer" },
      { name: "Raman", age: 22, profession: "Rapiest" },
    ];
    const concatData = data.concat(dummyData);
    concatData.forEach((element) => {
      console.log(element);
    });
  }
  
  // 5. Average Age
  function averageAge() {
    let avg = 0;
    data.forEach((element) => {
      avg += element.age;
    })
    console.log(avg/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let flag = false;
    data.forEach((element) => {
      if(element.age > 25){
        console.log("Yes");
        flag = true;
      }
    });
    if(!flag){
      console.log("No");
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let unique = new Set();
    data.forEach((element) => {
      unique.add(element.profession);
    });
    unique.forEach((val) => {
      console.log(val);
    })
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b) => {
      return a.age-b.age;
    });
    data.forEach((element, i) => {
      console.log(element);
    });
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach((element) => {
      if(element.name == "john"){
        element.profession = "manager";
      }
    });
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let count = 0;
    data.forEach((element) => {
      if(element.profession == "developer" || element.profession == "admin"){
        count++;
      }
    });
    console.log(count);
  }