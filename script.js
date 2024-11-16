
let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map( (el , ind)=> {
        if(arr[ind].profession === "developer"){
            console.log(arr[ind].name)
        }

    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((el , ind)=> {
        if(arr[ind].profession === "developer"){
            console.log(arr[ind].name)
        }

    })
  }
  
  function addData() {
    //Write your code here, just console.log
    const obj =  {id:4,name:"susan",age:"20",profession:"intern"} ;
    arr.push(obj);
    console.log(arr)
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter((el , ind)=> {
        if(arr[ind].profession === "admin"){
          let index = ind;
            arr.splice(index,1);
        }
    })
    console.log(arr)
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        { id: 4, name: "manoj", age: "25", profession: "Full stack developer" },
        { id: 5, name: "kalyana", age: "26", profession: "Web developer" },
        { id: 6, name: "rohit", age: "27", profession: "Windows admin" },
      ];
      let concatenateArray = arr.concat(newArr);
      console.log(concatenateArray);
  }

//   PrintDeveloperbyMap();
// PrintDeveloperbyForEach();
// addData();
// removeAdmin();
// concatenateArray();
