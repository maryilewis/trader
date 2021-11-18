/**
 * This file provides definitions for all of the types of cargo in the game.
 * Values and prices for cargo are defined in the Port service.
 */

import CargoProps from "../interfaces/Cargo.interface";

const CARGO_MAP = new Map<string, CargoProps>();

CARGO_MAP.set('food', {
	name: 'Food',
	description: 'Basic sustenance bricks. Perfect nutrition, bearable taste.',
	weight: 1,
	size: 1,
});

CARGO_MAP.set('fuel', {
	name: 'Fuel',
	description: 'Makes the ship go.',
	weight: 1,
	size: 1,
});

const getCargoProps = (name: string): CargoProps => {
	return CARGO_MAP.get(name) as CargoProps;
}

export type CargoType = 'food' | 'fuel';

export { getCargoProps };