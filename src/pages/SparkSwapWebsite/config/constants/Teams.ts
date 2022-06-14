import { ITeams, TeamsConfig } from "./types";

const founders: ITeams[] = [
  {
    name: 'Andy Agnas',
    position: 'FOUNDER',
    image: 'Andy',
    linkedinlink: 'andrino-agnas-2473a3158'
  },
  {
    name: 'Rico Zuñiga',
    position: 'CO-FOUNDER',
    image: 'Rico',
    linkedinlink: 'ricoz'
  }
]
const developers: ITeams[] = [
  {
    name: 'Aldrick Banaobra',
    position: 'LEAD BLOCKCHAIN DEVELOPER',
    image: 'Aldrick',
    linkedinlink: 'aldrickb'
  },
  {
    name: 'Medard Mandane',
    position: 'LEAD BACKEND DEVELOPER',
    image: 'Medard',
    linkedinlink: 'medardm'
  },
  {
    name: 'Jan Balbin',
    position: 'LEAD QA SPECIALIST',
    image: 'Balbz',
    linkedinlink: 'john-anthony-balbin-802501144'
  },
  {
    name: 'Koji Adriano',
    position: 'FULL STACK DEVELOPER',
    image: 'Koji',
    linkedinlink: 'koji-adriano'
  },
  {
    name: 'Mat Ivan Arquero',
    position: 'FULL STACK DEVELOPER',
    image: 'Mat',
    linkedinlink: 'mat-ivan-arquero-311b15211'
  },
];

const TeamData: TeamsConfig = {
  'founders':founders,
  'developers':developers,
}


export default TeamData;