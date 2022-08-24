const HomeAppliances = {
    category: 'home',
    type: 'electric',
    state: 'off',
    serve: function (message = 'Turned on') {
        if (this.state === 'on') console.log(message)
        else console.log('Powered off')
    },
    getStatus: function () {
        if (this.state === 'on') {
            for (let key in this)
                if (this.hasOwnProperty(key)) console.log(key + ': ' + this[key])
        } else console.log('The appliance is off')
    },
    getPower: function () {
        if (this.state === 'on' && this.wattage) return this.wattage
        else return 0
    },
}

HomeAppliances.power = function () {
    if (this.state === 'off') this.state = 'on'
    else this.state = 'off'
}

const kitchenAppliance = Object.create(HomeAppliances)
const livingRoomAppliance = Object.create(HomeAppliances)

kitchenAppliance.subcat = 'kitchen'
kitchenAppliance.serve.Prototype = function () {
    console.log('Used in kitchen')
}

livingRoomAppliance.subcat = 'entertainment system'
livingRoomAppliance.message = 'have fun'

console.info('\nMicrowave\'s status and properties: \n')

const microwave = Object.create(kitchenAppliance)
microwave.name = 'MV Oven'
microwave.power()
microwave.wattage = 650
microwave.getStatus()
microwave.heat = function () {
    this.serve('Cooking meals')
    console.log('Heating')
}
microwave.heat()

console.info('\nElectric Kettle\'s status and properties: \n')

const eKettle = Object.create(kitchenAppliance)
eKettle.name = 'Electric Kettle'
eKettle.power()
eKettle.message = 'Quickly Boil water'
eKettle.mode = 1
eKettle.wattage = 250
eKettle.getStatus()
eKettle.boil = function () {
    this.serve()
    console.log('Boiling water')
}
eKettle.boil()

console.info('\nComputer\'s status and properties: \n')

const computer = Object.create(livingRoomAppliance)
computer.message = 'Doing everything'
computer.displays = {
    Display: {
        resolution: '2560x1440',
        refreshRate: '144',
    },
    TV: {
        resolution: '3840x2160',
        refreshRate: '120',
    },
}
computer.wattage = 800

// computer.power()
computer.getStatus()

const appliances = []

appliances.push(microwave)
appliances.push(eKettle)
appliances.push(computer)

function powerTotal() {
    let power = 0
    for (let appliance of appliances) power += parseInt(appliance.getPower())
    return power
}

console.log('Total power consumption: ' + powerTotal() + ' W')
