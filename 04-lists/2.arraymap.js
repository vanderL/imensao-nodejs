const service = require('./service')

Array.prototype.myMap = function(callback) {
    const newArray = []
    for (let index = 0; index < this.length - 1; index++) {
        const result = callback(this[index], index)
        newArray.push(result)
    }
    return newArray
}


async function main () {
    try {
        const results = await service.getPeople(`a`)
        //const names = []
        //results.results.forEach(function (item) {
        //    names.push(item.name)
       // })

       //const names = results.results.map(function (people) { 
         //  return people.name
       // })
       
       const names = results.results.myMap(function(people, index) {
           return `[${index}]${people.name}`
       })
       console.log('names', names)
        
    } catch (error) {
        console.error(`Bad call`, error)
    }
}

main()