export default interface CrewProps {
	name: string;
	loyalty: number;
	skills: {
		navigator: number;
		pilot: number;
		cook: number;
		engineer: number;
		fighter: number;
	}
}