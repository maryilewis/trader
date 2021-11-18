import WareProps from "./Ware.interface";

export default interface PortProps {
	name: string;
	description: string; // IDEA: diffrent descriptions for different times of day
	wares: WareProps[]; // What is for sale
	buybackValue: {
		// one for every CargoType
		food: number;
		fuel: number;
	}
}