export interface ITeams {
  name: string;
  position: string;
  image: string;
}

export interface TeamsConfig {
  [key: string] : ITeams[]
}
