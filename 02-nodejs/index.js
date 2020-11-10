const util = require('util')
const getAddressAsync = util.promisify(getAddress)

function getUser() {
    //quando der algum problema -> reject(ERRO)
    //quando sucess -> RESOLV
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function () {
            //return reject(new Error('DEU MUITO RUIM'))
            return resolve({
                id: 1,
                nome: 'Aladin',
                date: new Date()
            })
        }, 1000)
    })
}


function getPhone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                phone: '981214026',
                ddd: 85
    
            })
        }, 2000)

    })
}

function getAddress(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            street: 'rua 307',
            number: 110
        }, 2000)
    })

}



const userPromise = getUser()
// para manipular o sucesso usamos a função .then
// para manipular erros, usamos o .cath
// user -> telefone -> telefone
userPromise
    .then(function(user) {
        return getPhone(user.id)
            .then(function resolverPhone(result) {
                return {
                    user: {
                        nome: user.nome,
                        id: user.id

                    },
                    phone: result
                }
        })
    })
    .then(function(resultado){
        const address = getAddressAsync(resultado.user.id)
        return address.then(function resolverAddress(result) {
            return {
                usuario: resultado.user,
                phone: resultado.phone,
                address: result
            }
        })
    })
    .then(function(result) {
        console.log(`
            Nome: ${result.usuario.nome}
            Endereco: ${result.address.street}, ${result.address.number}
            Telefone: (${result.phone.ddd}) ${result.phone.phone}`)
})
    .catch(function(error){
        console.error('DEU RUIM', error)
})
/*getUser(function handleUser(error, user) {
    //null || "" || 0 === false
    if(error) {
        console.error('DEU RUIM em USUARIO', error)
        return
    }
    getPhone(user.id, function handlePhone(error1,  phone){
        if (error1) {
            console.error('DEU RUIM em TELEFONE', error)
            return
        }
        getAddress(user.id, function handleAdress(error2, address){
            if (error2) {
                console.error('DEU RUIM em ENDEREÇO', error)
                return
            }

            console.log(`
            Nome: ${user.nome},
            Nascimento: ${user.dataNascimento}
            Endereco: ${address.street}, ${address.number}
            Telefone: (${phone.ddd}) ${phone.phone}`)

        })
    })
})

*///const phone = getPhone(user.id)

//const address = getAddress(user.id)
