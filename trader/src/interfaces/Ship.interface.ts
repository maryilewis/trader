import CargoProps from "./Cargo.interface";
import CrewProps from "./Crew.interface";

export default interface ShipProps {
	reputation: number;
	credits: number;
	crew: CrewProps[];
	cargo: CargoProps[];
	food: number;
	fuel: number;
}