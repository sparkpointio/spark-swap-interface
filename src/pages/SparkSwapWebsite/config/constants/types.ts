export interface ITeams {
  name: string;
  position: string;
  image: string;
  linkedinlink?: string;
}

export interface TeamsConfig {
  [key: string] : ITeams[]
}
