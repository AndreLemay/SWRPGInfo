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
