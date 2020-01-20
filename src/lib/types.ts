export interface Career {
	name: string
	description: string
	careerSkills: string[]
	specializations: Specialization[]
}

export interface Specialization {
	name: string
	subtitle: string
	description: string
	careerSkills: string[]
	talents: Talent[]
}

export interface Talent {
	name: string
	description: string
	row: number
	column: number
	passive: boolean
	connections: boolean[]
}

export interface Species {
	name: string
	description: string
	brawn: number
	agility: number
	intellect: number
	cunning: number
	willpower: number
	presence: number
	startXP: number
	wounds: number
	strain: number
	startSkills: string
	specialAbilities: string
}

export enum WeaponCategory {
	Energy,
	Slugthrower,
	Thrown,
	Explosive,
	Other,
	MicroRocket,
	Missile,
	Grenade,
	Arrow,
	Melee
}

export interface Weapon {
	name: string
	category: WeaponCategory
	skill: string
	damage: number
	crit: number
	range: string
	encumbrance: number
	hardPoints: number
	price: number
	rarity: number
	qualities: string
	special: string
	restricted: boolean
}

export interface Armor {
	name: string
	defense: number
	soak: number
	price: number
	restricted: boolean
	encumbrance: number
	hardPoints: number
	rarity: number
	special: string
}

export interface Attachment {
	name: string
	bonuses: string
	modificationOptions: string
	appliesTo: string
	category: string
	price: number
	restricted: boolean
	hardPoints: number
	rarity: number
}

export enum GearCategory {
	Communication,
	Poison,
	Detection,
	Medical,
	Cybernetic,
	Recreation,
	Security,
	Survival,
	Tool,
	Drug,
	Illegal
}

export interface Gear {
	name: string
	description: string
	category: GearCategory
	price: string
	restricted: boolean
	encumbrance: number
	rarity: number

}

export interface ShipWeapon {
	name: string
	category: string
	range: string
	damage: number
	crit: number
	price: number
	rarity: number
	minSizeToMount: number
	special: string
}

export enum VehicleType {
	Airspeeder,
	Landspeeder,
	WheelTrack,
	Walker
}

export interface Vehicle {
	name: string
	category: VehicleType
	silhouette: number
	speed: number
	handling: number
	defense: string
	armor: number
	hull: number
	systemStrain: number
	sensorRange: string
	maxAltitude: string
	crew: string
	encumbrance: string
	passengers: string
	consumable: string
	price: number
	restricted: boolean
	rarity: number
	hardPoints: number
	weapons: string
}

export enum ShipType {
	Starfighter,
	Freighter
}

export interface Ship {
	name: string
	category: ShipType
	silhouette: number
	speed: number
	handling: number
	defense: string
	armor: number
	hull: number
	systemStrain: number
	sensorRange: string
	hyperdrive: string
	navicomputer: string
	crew: string
	encumbrance: string
	passengers: string
	consumable: string
	price: number
	restricted: boolean
	rarity: number
	hardPoints: number
	weapons: string
	special: string
}

export interface ShipMod {
	name: string
	price: string
	restricted: boolean
	rarity: number
	hardPoints: number
	appliesTo: string
	description: string
	modificationOptions: string
}