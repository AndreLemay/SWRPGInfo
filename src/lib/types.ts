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
  connections: [boolean, boolean, boolean, boolean]
}
