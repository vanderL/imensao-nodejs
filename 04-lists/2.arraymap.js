const service = require('./service')

async function main () {
    const novoArray = []
    for(let indice = 1; novoArray >  1; indice++) {
        
    }

    try {
        const results = await service.getPeople(`a`)
        const names = []
        results.results.forEach(function (item) {
            names.push(item.name)
        })
        console.log('names', names)
        
    } catch (error) {
        console.error(`Bad call`, error)
    }
}

main()