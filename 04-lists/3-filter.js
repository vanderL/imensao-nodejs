const { getPeople } =  require('./service');

//implementação propria
Array.prototype.myFilter = function (callback) {
    const list = []
    for(index in this) {
        const item = this[index];
        const result = callback(item, index, this)

        if (!result) continue;
        list.push(item)
    }

    return list;
}




async function main(){
    try {
        const { results } = await getPeople( `a `)

        // const familiaLars = results.filter(function (item) {
            
        //     const result = item.name.toLowerCase().indexOf(`lars`) !== -1
        //     return result
        // })

        const familiaLars = results.myFilter((item, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            return item.name.toLowerCase().indexOf('lars') !== -1
        })

        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)

    } catch (error) {
        console.log('error', error);
    }
}

main()

