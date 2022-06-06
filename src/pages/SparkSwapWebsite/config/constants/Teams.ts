import { ITeams, TeamsConfig } from "./types";

const founders: ITeams[] = [
  {
    name: 'Andy Agnas',
    position: 'FOUNDER',
    image: 'Andy'
  },
  {
    name: 'Rico Zuñiga',
    position: 'CO-FOUNDER',
    image: 'Rico'
  }
]
const developers: ITeams[] = [
  {
    name: 'Aldrick Banaobra',
    position: 'LEAD BLOCKCHAIN DEVELOPER',
    image: 'Aldrick'
  },
  {
    name: 'Medard Mandane',
    position: 'LEAD BACKEND DEVELOPER',
    image: 'Medard'
  },
  {
    name: 'Jan Balbin',
    position: 'LEAD QA SPECIALIST',
    image: 'Balbz'
  },
  {
    name: 'Koji Adriano',
    position: 'FULL STACK DEVELOPER',
    image: 'Koji'
  },
  {
    name: 'Mat Ivan Arquero',
    position: 'FULL STACK DEVELOPER',
    image: 'Mat'
  },
];

const TeamData: TeamsConfig = {
  'founders':founders,
  'developers':developers,
}


export default TeamData;