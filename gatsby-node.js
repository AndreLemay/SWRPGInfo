exports.createPages = async ({ actions: { createPage } }) => {
	const { careers } = await getData()

	createPage({
		path: `/`,
		component: require.resolve('./src/templates/index.tsx'),
		context: { careers }
	})
}

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		devtool: 'eval-source-map'
	})
}

const getData = () => {
	return {
		careers: [
			{
				name: 'Bounty Hunter',
				description:
					'A hunter who seeks to collect bounties for his work. Bounty Hunters tend to be feared, reviled, looked down upon - and in great demand throughout the galaxy. They are expert trackers, brutal combatants, and effective investigators. They tend to prefer skulduggery, stealth, and traps over frontal assaults, but the most respected Bounty Hunters will do whatever it takes to catch their quarries and collect their fees.',
				careerSkills: [
					'Athletics',
					'Brawl',
					'Perception',
					'Piloting (Planetary)',
					'Piloting (Space)',
					'Ranged (Heavy)',
					'Streetwise',
					'Vigilance'
				],
				specializations: [
					{
						name: 'Assassin',
						subtitle: 'Instrument of Policy',
						description:
							'Whereas most Bounty Hunters focus primarily on the capture of quarry, those who specialize as Assassins are generally tasked with the straightforward proposition of terminating their targets. Assassins tend to prefer getting in quietly, taking out targets (either up close or sniping from afar), and leaving just as silently as they entered. Despite their different methods, Assassins still adhere to many of the same ethics and practices of other Bounty Hunters. They take their work very seriously, avoid all needless bloodshed, and honor their contracts to the letter. Some treat their methods with reverence, even assigning a certain mystique to it. Others simply see themselves as cold killers, and are just fine with it.',
						careerSkills: ['Melee', 'Ranged (Heavy)', 'Skulduggery', 'Stealth'],
						talents: [
							{
								name: 'Grit',
								description: 'Gain +1 Strain Threshold',
								column: 1,
								row: 1,
								passive: true,
								connections: [false, false, false, true]
							},
							{
								name: 'Lethal Blows',
								description:
									'Add +10 per rank of Lethal Blows to any Critical Injury results inflicted on opponets',
								column: 2,
								row: 1,
								passive: true,
								connections: [false, false, false, true]
							},
							{
								name: 'Stalker',
								description:
									'Add 1 Boost per rank of Stalker to all Stealth and Coordination checks',
								column: 3,
								row: 1,
								passive: true,
								connections: [false, false, false, true]
							},
							{
								name: 'Dodge',
								description:
									'When targeted by combat check, may perform a Dodge incidental to suffer a number of strain no greater than ranks of Dodge, then upgrade the difficulty of the check by that number',
								column: 4,
								row: 1,
								passive: false,
								connections: [false, false, false, true]
							},
							{
								name: 'Precise Aim',
								description:
									"Once per round, may perform Precise Aim maneuver. Suffer a number of strain no greater than ranks in Precise Aim, then reduce target's melee and ranged defense by that number",
								column: 1,
								row: 2,
								passive: false,
								connections: [false, true, false, true]
							},
							{
								name: 'Jump Up',
								description:
									'Once per round, may stand from seated or prone as an incidental',
								column: 2,
								row: 2,
								passive: false,
								connections: [true, true, true, true]
							},
							{
								name: 'Quick Strike',
								description:
									'Add 1 Boost per rank of Quick Strike to combat checks against targets that have not acted yet this encounter',
								column: 3,
								row: 2,
								passive: true,
								connections: [true, true, true, true]
							},
							{
								name: 'Quick Draw',
								description:
									'Once per round, draw or holster a weapon or accessible item as an incidental',
								column: 4,
								row: 2,
								passive: false,
								connections: [true, true, false, true]
							},
							{
								name: 'Targeted Blow',
								description:
									'After making a successful attack, may spend 1 Destiny Point to add damage equal to Agility to one hit',
								column: 1,
								row: 3,
								passive: false,
								connections: [false, true, false, true]
							},
							{
								name: 'Stalker',
								description:
									'Add 1 Boost per rank of Stalker to all Stealth and Coordination checks',
								column: 2,
								row: 3,
								passive: true,
								connections: [false, true, true, true]
							},
							{
								name: 'Lethal Blows',
								description:
									'Add +10 per rank of Lethal Blows to any Critical Injury results inflicted on opponents',
								column: 3,
								row: 3,
								passive: true,
								connections: [true, true, false, true]
							},
							{
								name: 'Anatomy Lessons',
								description:
									'After making a successful attack, may spend 1 Destiny Point to add damage equal to Intellect to one hit',
								column: 4,
								row: 3,
								passive: false,
								connections: [false, true, false, true]
							},
							{
								name: 'Stalker',
								description:
									'Add 1 Boost per rank of Stalker to all Stealth and Coordination checks',
								column: 1,
								row: 4,
								passive: true,
								connections: [false, true, true, true]
							},
							{
								name: 'Sniper Shot',
								description:
									"Before making a non-thrown ranged attack, may perform a Sniper Shot maneuver to increase the weapon's range by 1 range band per rank in Sniper Shot. Upgrade the difficulty of the attack by 1 per range band increase",
								column: 2,
								row: 4,
								passive: false,
								connections: [true, true, false, true]
							},
							{
								name: 'Dodge',
								description:
									'When targeted by combat check, may perform a Dodge incidental to suffer a number of strain no greater than ranks of Dodge, then upgrade the difficulty of the check by that number',
								column: 3,
								row: 4,
								passive: false,
								connections: [false, true, false, true]
							},
							{
								name: 'Lethal Blows',
								description:
									'Add +10 per rank of Lethal Blows to any Critical Injury results inflicted on opponents',
								column: 4,
								row: 4,
								passive: true,
								connections: [false, true, false, true]
							},
							{
								name: 'Precise Aim',
								description:
									"Once per round, may perform Precise Aim maneuver. Suffer a number of strain no greater than ranks in Precise Aim, then reduce target's melee and ranged defense by that number",
								column: 1,
								row: 5,
								passive: false,
								connections: [false, true, false, false]
							},
							{
								name: 'Deadly Accuracy',
								description:
									'When acquired, choose 1 combat skill. Add damage equal to ranks in that skill to one hit of successful attack made using that skill',
								column: 2,
								row: 5,
								passive: true,
								connections: [false, true, false, false]
							},
							{
								name: 'Dedication',
								description:
									'Gain +1 to a single characteristic. This cannot bring a characteristic above 6',
								column: 3,
								row: 5,
								passive: true,
								connections: [false, true, false, false]
							},
							{
								name: 'Master of Shadows',
								description:
									'Once per round, suffer 2 strain to decrease difficulty of next Stealth or Skulduggery check by one',
								column: 4,
								row: 5,
								passive: false,
								connections: [false, true, false, false]
							}
						]
					},
					{
						name: 'Gadgeteer',
						subtitle: 'Connoisseur of Tech',
						description:
							'The Gadgeteer excels at presenting himself as a one-person battle force, at least for a short time. Using both the latest tech and his own personally-modified gear, a Gadgeteer can be hard to stop. Gadgeteers are in many ways the ultimate hybrid of tech expert and combatant.',
						careerSkills: ['Brawl', 'Coercion', 'Mechanics', 'Ranged (Light)'],
						talents: [
							{
								name: 'Brace',
								description:
									'Perform the Brace maneuver to remove 1 Setback per rank of Brace from next Action. This may only remove Setback added by environmental circumstances',
								column: 1,
								row: 1,
								passive: false,
								connections: [false, false, false, false]
							},
							{
								name: 'Toughened',
								description: 'Gain +2 Wound Threshold',
								column: 2,
								row: 1,
								passive: true,
								connections: [false, false, false, true]
							},
							{
								name: 'Intimidating',
								description:
									'May suffer a number of strain no greater than ranks of Intimidating to downgrade difficulty of Coercion checks, or upgrade difficulty when targeted by Coercion checks, by that number',
								column: 3,
								row: 1,
								passive: false,
								connections: [false, false, false, false]
							},
							{
								name: 'Defensive Stance',
								description:
									'Once per round, may perform Defensive Stance maneuver and suffer a number of strain no greater than ranks in Defensive Stance to upgrade difficulty of all incoming melee attacks by that number',
								column: 4,
								row: 1,
								passive: false,
								connections: [false, false, false, true]
							},
							{
								name: 'Spare Clip',
								description:
									'Cannot run out of ammo due to Despair. Items with Limited-Ammo quality run out of ammo as normal',
								column: 1,
								row: 2,
								passive: true,
								connections: [false, false, true, false]
							},
							{
								name: 'Jury Rigged',
								description:
									'Choose 1 weapon, armor, or other item, and give it a permanent improvement while it remains in use',
								column: 2,
								row: 2,
								passive: true,
								connections: [true, true, true, true]
							},
							{
								name: 'Point Blank',
								description:
									'Add 1 damage per rank of Point Blank to damage of one hit of successful attack while using Ranged (Heavy) or Ranged (Light) skills at close range or engaged',
								column: 3,
								row: 2,
								passive: true,
								connections: [true, false, false, false]
							},
							{
								name: 'Disorient',
								description:
									'After hitting with combat check, may spend 2 Advantage to disorient target for number of rounds equal to ranks in Disorient',
								column: 4,
								row: 2,
								passive: true,
								connections: [false, true, false, true]
							},
							{
								name: 'Toughened',
								description: 'Gain +2 Wound Threshold',
								column: 1,
								row: 3,
								passive: true,
								connections: [false, false, true, false]
							},
							{
								name: 'Armor Master',
								description: 'When wearing armor, increase total soak value by 1',
								column: 2,
								row: 3,
								passive: true,
								connections: [true, true, true, true]
							},
							{
								name: 'Natural Enforcer',
								description:
									'Once per session, may re-roll any 1 Coercion or Streetwise check',
								column: 3,
								row: 3,
								passive: false,
								connections: [true, false, false, false]
							},
							{
								name: 'Stunning Blow',
								description:
									'When making Melee checks, may inflict damage as strain instead of wounds. This does not ignore soak',
								column: 4,
								row: 3,
								passive: false,
								connections: [false, true, false, true]
							},
							{
								name: 'Jury Rigged',
								description:
									'Choose 1 weapon, armor, or other item and give it a permanent improvement',
								column: 1,
								row: 4,
								passive: true,
								connections: [false, false, true, false]
							},
							{
								name: 'Tinkerer',
								description:
									'May add 1 additional hardoint to a number of items equal to ranks in Tinkerer. Each item may only be modified once',
								column: 2,
								row: 4,
								passive: true,
								connections: [true, true, true, true]
							},
							{
								name: 'Deadly Accuracy',
								description:
									'When acquired, choose 1 combat skill. Add damage equal to ranks in that skill to one hit of successful attacks made using that skill',
								column: 3,
								row: 4,
								passive: true,
								connections: [true, false, false, false]
							},
							{
								name: 'Improved Stunning Blow',
								description:
									'When dealing strain damage with Melee or Brawl checks, may spend Triumph to stagger target for 1 round per Triumph',
								column: 4,
								row: 4,
								passive: false,
								connections: [false, true, false, true]
							},
							{
								name: 'Intimidating',
								description:
									'May suffer a number of strain no greater than ranks of Intimidating to downgrade difficulty of Coercion checks, or upgrade difficulty when targeted by Coercion checks, by that number',
								column: 1,
								row: 5,
								passive: false,
								connections: [false, false, true, false]
							},
							{
								name: 'Dedication',
								description:
									'Gain +1 to a single characteristic. This cannot bring a characteristic above 6',
								column: 2,
								row: 5,
								passive: true,
								connections: [true, true, true, false]
							},
							{
								name: 'Improved Armor Master',
								description:
									'When wearing armor with a soak value of 2 or higher, increase defense by 1',
								column: 3,
								row: 5,
								passive: true,
								connections: [true, false, false, false]
							},
							{
								name: 'Crippling Blow',
								description: 'Increase the difficulty of next combat check by 1. If check deals damage, target suffer 1 strain whenever he moves for the remainder of the encounter',
								column: 4,
								row: 5,
								passive: false,
								connections: [false, true, false, false]
							}
						]
					},
					{
						name: 'Survivalist',
						subtitle: 'Master of the Wild',
						description: null,
						careerSkills: [],
						talents: []
					}
				]
			},
			{
				name: 'Colonist',
				description: 'Colonize',
				careerSkills: [],
				specializations: []
			},
			{
				name: 'Explorer',
				description: 'Explore',
				careerSkills: [],
				specializations: []
			},
			{
				name: 'Hired Gun',
				description: 'Apply Gun',
				careerSkills: [],
				specializations: []
			},
			{
				name: 'Smuggler',
				description: 'Smuggle',
				careerSkills: [],
				specializations: []
			},
			{
				name: 'Technician',
				description: 'Fix shit',
				careerSkills: [],
				specializations: []
			}
		]
	}
}
