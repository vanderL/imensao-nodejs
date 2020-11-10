function getUser(callback){
    setTimeout(function (){
        return  callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })

    }, 1000)
}

function getPhone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            phone: '981214026',
            ddd: 85

        })
    }, 2000)
}

function getAddress(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            street: 'rua 307',
            number: 110
        }, 2000)
    })

}


function handleUser(erro, user) {
    console.log('user', user)
}

getUser(function handleUser(error, user) {
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
//const phone = getPhone(user.id)

//const address = getAddress(user.id)
