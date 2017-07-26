let host = {
    servico1: []
}

const addHost = (nome, apps) => {
    if (host[nome].length == 0) {
        host[nome] = apps
    }

    return host[nome].filter(h => apps.some(a => a.id == h.id))
}

const balancy = (nome, apps) => {
    let servico = host[nome].find(h => !h.data) || host[nome].sort((a, b) => a.data - b.data)[0]

    host[nome] = host[nome]
        .map(h => {
            if(h.id == servico.id){
                h.data = new Date()
            }

            return h
        })

    return servico
}

let apps = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
]

host['servico1'] = addHost('servico1', apps)

console.log(host)

let service = balancy('servico1', apps)

console.log('service', service)

let apps2 = [
    { id: 1 },
    { id: 2 }
]

host['servico1'] = addHost('servico1', apps2)

console.log('host2',host)

let service2 = balancy('servico1', apps2)

console.log('service2', service2)

console.log('host3',host)