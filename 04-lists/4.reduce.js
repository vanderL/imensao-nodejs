const { getPeople } =  require('./service');

Array.prototype.myReduce = function (callback, valueInitial) {
    let valueLast = typeof valueInitial !== undefined ? valueInitial : this[0]

    for (let index = 0; index <= this.length - 1; index++) {
        valueLast = callback(valueLast, this[index], this)
    }

    return valueLast
}


async function main() {
    try {
        const { results } = await getPeople(`a`)

        const pesos = results.map(item => parseInt(item.height))
        // console.log('pesos', pesos)

        // const total = pesos.reduce((prev, next) => {
        //     return prev + next
        // }, 0)

        const myList = [
            ['Vander', 'Lima'],
            ['NodeJs', 'React']
        ]
        const total = myList.myReduce((prev, next) => {
            return prev.concat(next)
        }, []).join(', ')

        console.log('total', total)


    } catch (error) {
        console.error('Deu erro aqui', error)
    }
}

main()