import { CargoType } from "../services/Cargo.service";

export default interface WareProps {
	name: CargoType;
	cost: number;
	count: number;
}