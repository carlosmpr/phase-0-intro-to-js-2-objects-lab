// Write your solution in this file!
var employee = {
  
}

const  updateEmployeeWithKeyAndValue= (obj, key, value) => Object.assign({}, obj, {[key]:value})


const destructivelyUpdateEmployeeWithKeyAndValue =(object, key, value) => { object[key] = value
return object
}

const deleteFromEmployeeByKey = (object, key) => {
  var newObject = Object.assign({} , Object)
  
  delete newObject[key]
  
  return newObject
}


const destructivelyDeleteFromEmployeeByKey = (object, key) =>{
  delete object[key]
  
  return object
}