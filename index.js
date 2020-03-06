function createEmployeeRecord(array){
    let obj = {
      firstName: array[0], 
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    }
    return obj
}

function createEmployeeRecords(arrayOfArrays){
  let theArray = []
    arrayOfArrays.forEach(function(element){
        theArray.push(createEmployeeRecord(element))
    })
    return theArray
}

function createTimeInEvent(){
  let hour = parseInt(timeStamp.split(' ')[1])
    let date = timeStamp.split(' ')[0]
    obj.timeInEvents.push({type: "TimeIn", hour: hour, date: date})
    return obj
}