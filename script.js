function mergeArrays(arr1, arr2) {
    let result = arr1.concat(arr2)
    result = result.sort((a,b)=>{
       return a - b
    })
    result = Array.from(new Set(result))
    return result
  }
  
  mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12])