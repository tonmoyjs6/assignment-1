


const formatValue=(value:string|number | boolean)=>{
    if(typeof value==='string'){
        return value.toUpperCase()
    }
    else if(typeof value=== 'number'){
        return value * 10
    }
    else return ! value

}




const getLength=(value: string | object)=>{
    if(typeof value==="string"){
        return value.length
    }
    else if(Array.isArray(value)){
        return value.length

    }

}


class Person{
    name:string;
    age:number

    constructor(name:string, age:number){
        this.name=name
        this.age=age
    }

        getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`;

        }

}

interface Items{
    title:string;
    rating:number
}


const filterByRating=(values:Items[])=>{
   
    const filterdItems=values.filter((item)=>item.rating>=4)
    return filterdItems
}



type Users={
    id:number;
    name:string;
    email:string;
    isActive:boolean
}


const filterActiveUsers =(values:Users[])=>{
    const activeUsers=values.filter((user)=>user.isActive===true)
    return activeUsers
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];




// 6



interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean
}

const printBookDetails =(value: Book)=>{

    const isStock=value.isAvailable?"yes":"no"
    console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${isStock}`);
    
    
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);




let uniqueArr:number[]|string[]=[]
let curentIndex:number=0
const getUniqueValues=(arr1:number[]|string[],arr2:number[]|string[])=>{

  for(let i=0; i<arr1.length;i++){
    let duplicate:boolean=false

    for(let k=0; k<uniqueArr.length; k++){
      if(arr1[i]===uniqueArr[k]){
        duplicate=true
        break
      }
    }
    if(!duplicate){
      uniqueArr[curentIndex]=arr1[i]
      curentIndex++
    }
  }

  for(let j=0; j<arr2.length; j++){

    let duplicate:boolean=false


    for(let k=0; k<uniqueArr.length; k++){
      if(arr2[j]===uniqueArr[k]){
        duplicate=true
        break;
      }
    }

    if(!duplicate){
      uniqueArr[curentIndex]=arr2[j]
      curentIndex++
    }
  }



return uniqueArr




}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];



type Product={
  name:string;
  price:number;
  quantity:number;
  discount?:number
}


const calculateTotalPrice=(values:Product[])=>{
  
  const totalprice=values.reduce((acc,currentValue)=>{
    let totalItemsPrice=currentValue.price*currentValue.quantity
    if(currentValue.discount){
      
      let discountPrice=totalItemsPrice* currentValue.discount /100
      totalItemsPrice=totalItemsPrice-discountPrice
      
      
      
      
    }
    return acc+totalItemsPrice

    
  },0)

return totalprice

}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];



