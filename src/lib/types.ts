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
}
