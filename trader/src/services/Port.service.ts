import PortProps from "../interfaces/Port.interface";
import WareProps from "../interfaces/Ware.interface";

const PORT_MAP = new Map<string, PortProps>();

PORT_MAP.set('Virid', {
	name: 'Virid',
	description: 'A person is selling things. Food is inexpensive here because of the farms and food processing plant.',
	wares: [{
		name: 'food',
		cost: 2,
		count: 100,
	}, {
		name: 'fuel',
		cost: 5,
		count: 100,
	}],
	buybackValue: {
		// one for every CargoType
		food: 1,
		fuel: 1,
	}
});

const getPortProps = (name: string): PortProps => {
	return PORT_MAP.get(name) as PortProps;
}

/**
 * 
 * @param portName The port where the transaction is taking place
 * @param wareName What you are buying
 * @param count How many
 * @returns the price, just to double check, if you want
 */
const buyFromPort = (portName: string, wareName: string, count: number): number => {
	try {
		const port = PORT_MAP.get(portName) as PortProps;
		const ware = port.wares.find(ware => ware.name === wareName) as WareProps;
		ware.count -= count;
		const price = ware.count * ware.cost;
		// create record of transaction, increase relationship
		return price;
	} catch (error) {
		console.error(`Something went wrong while attemptin to purchase ${count} ${wareName} from ${portName}`);
		return 0;
	};
}

/**
 * Get new shipments
 * @param day the total day
 */
const dailyActivity = (day: number) => {

}

export { getPortProps, buyFromPort, dailyActivity, };