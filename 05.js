const homeAppliances = []

function powerTotal() {
    let power = 0
    for (let appliance of homeAppliances) power += parseInt(appliance.getPower())
    console.log('Total power consumption: ' + power + 'W')
    return power
}

class HomeAppliances {
    constructor(subcat, wattage, category, type, state, message) {
        this.subcat = subcat || 'not set'
        this.wattage = wattage || 0
        this.category = category || 'home'
        this.type = type || 'electric'
        this.state = state || 'off'
        this.message = message || 'Serving'
        homeAppliances.push(this)
    }

    power() {
        if (this.state === 'off') this.state = 'on'
        else this.state = 'off'
        console.log(`This device is ${this.state}`)
        powerTotal()
    }
    usage(message) {
        if (this.state === 'on') return message
        else return 'No power'
    }
    getInfo() {
        if (this.state === 'on') {
            usage(this.message)
            return `This is a ${this.category} ${this.type} appliance.`
        } else return 'The appliance is off'
    }
    getPower() {
        if (this.state === 'on' && this.wattage) return this.wattage
        return 0
    }
}

class KitchenAppliance extends HomeAppliances {
    constructor(name, mode, wattage, message, subcat, category, type, state) {
        super(
            subcat,
            wattage,
            category,
            type,
            state,
            (message = message || 'Used in kitchen')
        )
        this.subcat = subcat || 'kitchen'
        this.name = name || 'no name device'
        this.wattage = wattage || 0
        this.mode = mode || 0
    }

    getInfo() {
        if (this.state === 'on') {
            return `This '${this.name}' is a ${this.subcat} ${this.type} appliance. 
      It takes ${this.wattage} watts and is set to mode "${this.mode}" 
      ${this.usage(this.message)}`
        } else return super.getInfo()
    }
}

class LivingRoomAppliance extends HomeAppliances {
    constructor(
        name,
        inputs,
        dimensions,
        wattage,
        message,
        subcat,
        category,
        type,
        state
    ) {
        super(
            subcat,
            wattage,
            category,
            type,
            state,
            (message = message || 'have fun')
        )
        this.subcat = subcat || 'entertainment system'
        this.name = name || 'gadget'
        this.wattage = wattage || 0
        this.inputs = inputs || {}
        this.dimensions = dimensions || {}
    }
    getInfo() {
        if (this.state === 'off')
            return `This ${this.name} is a ${this.subcat} ${this.type} appliance. 
      It takes ${this.wattage} watts and has ${
                Object.keys(this.inputs).length
            } inputs.
      ${this.usage(this.message)}`
        else return this.usage(this.message)
    }
}

console.info('\nMicrowave\'s status and properties: \n')

const microwave = new KitchenAppliance('MV Oven', 'Heating', 650)

console.log(microwave.getInfo())
microwave.power()
console.log(microwave.getInfo())

const eKettle = new KitchenAppliance(
    'Electric Kettle',
    'Boiling',
    250,
    'Quickly Boil water'
)

console.info('\nElectric Kettle\'s status and properties: \n')

console.log(eKettle.getInfo())
eKettle.power()
console.log(eKettle.getInfo())

console.info('\nComputer\'s status and properties: \n')

const _displays = {
    Display: {
        resolution: '2560x1440',
        refreshRate: '144',
    },
    TV: {
        resolution: '3840x2160',
        refreshRate: '120',
        quantity: 2,
    },
}
const _dimensions = {
    width: 950,
    height: 50,
    depth: 55,
}
const computer = new LivingRoomAppliance(
    'AlienWare',
    _displays,
    _dimensions,
    800,
)

console.log(computer.getInfo())
computer.power()
console.log(computer.getInfo())
computer.power()
