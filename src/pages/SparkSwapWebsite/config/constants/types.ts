export interface ITeams {
  name: string
  position: string
  image: string
  linkedinlink?: string
}

export interface TeamsConfig {
  [key: string]: ITeams[]
}

export interface Roadmap {
  [key: string]: { value: string; checked?: boolean; items?: { value?: string }[] }[]
}

export interface RoadmapConfig {
  [key: string]: Roadmap
}
