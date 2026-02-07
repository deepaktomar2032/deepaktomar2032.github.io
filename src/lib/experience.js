const careerStartDate = 8
const careerStartMonth = 7
const careerStartYear = 2018

const careerStart = new Date(careerStartYear, careerStartMonth, careerStartDate)

export const yearsOfExperience = Math.abs(new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970)

export const entries = [
  {
    id: 'inform-gmbh',
    company: 'Inform GmbH',
    jobTitle: 'Senior Full Stack Developer (Backend Focused)',
    timeframe: 'June 2024 → Present',
    current: true,
    location: 'Aachen, NRW, Germany',
    description: '',
    tags: [
      { color: 'primary', text: 'TypeScript' },
      { color: 'primary', text: 'Node.js' },
      { color: 'primary', text: 'Koa.js' },
      { color: 'primary', text: 'REST APIs' },
      { color: 'primary', text: 'RabbitMQ' },
      { color: 'primary', text: 'Pub/Sub' },
      { color: 'primary', text: 'Keycloak' },
      { color: 'primary', text: 'Docker' },
      { color: 'primary', text: 'Kubernetes' },
      { color: 'primary', text: 'Argo CD' },
      { color: 'primary', text: 'Helm charts' },
      { color: 'primary', text: 'OpenTelemetry' },
      { color: 'primary', text: 'Prometheus' },
      { color: 'primary', text: 'GitLab' },
      { color: 'primary', text: 'CI/CD' },
      { color: 'primary', text: 'SonarQube' },
      { color: 'primary', text: 'Monorepo' }
    ]
  },
  {
    id: 'softgames-gmbh',
    company: 'Softgames GmbH & MobileForce',
    jobTitle: 'Senior Software Developer (Full-Stack, Backend Focused)',
    timeframe: 'Dec 2021 → May 2024',
    location: 'Berlin, Germany',
    description: '',
    tags: [
      { color: 'primary', text: 'TypeScript' },
      { color: 'primary', text: 'JavaScript' },
      { color: 'primary', text: 'NodeJS' },
      { color: 'primary', text: 'NestJS' },
      { color: 'primary', text: 'REST APIs' },
      { color: 'primary', text: 'DynamoDB' },
      { color: 'primary', text: 'AWS S3' },
      { color: 'primary', text: 'AWS Lambda' },
      { color: 'primary', text: 'Serverless' },
      { color: 'primary', text: 'GitLab Actions' },
      { color: 'primary', text: 'CI/CD' },
      { color: 'primary', text: 'DevOps' },
      { color: 'primary', text: 'TDD' }
    ]
  },
  {
    id: 'zynga',
    company: 'Zynga Inc.',
    jobTitle: 'Associate System Designer (Tech.)',
    timeframe: 'Oct 2020 → Dec 2021',
    location: 'Karnataka, India',
    description: '',
    tags: [
      { color: 'primary', text: 'TypeScript' },
      { color: 'primary', text: 'Java' },
      { color: 'primary', text: 'Node' },
      { color: 'primary', text: 'ExpressJS' },
      { color: 'primary', text: 'Client-Server' },
      { color: 'primary', text: 'MySQL' },
      { color: 'primary', text: 'MongoDB' },
      { color: 'primary', text: 'Knex' },
      { color: 'primary', text: 'Redis' },
      { color: 'primary', text: 'Caching' },
      { color: 'primary', text: 'Microservices' },
      { color: 'primary', text: 'Docker' },
      { color: 'primary', text: 'Jenkins' },
      { color: 'primary', text: 'CI/CD' },
      { color: 'primary', text: 'Github' },
      { color: 'primary', text: 'Jira' }
    ]
  },
  {
    id: 'aristocrat-technologies',
    company: 'Aristocrat Technologies',
    jobTitle: 'Software Developement Engineer',
    timeframe: 'July 2018 → Oct 2020',
    location: 'Haryana, India',
    description: '',
    tags: [
      { color: 'primary', text: 'Typescript' },
      { color: 'primary', text: 'Javascript' },
      { color: 'primary', text: 'Python' },
      { color: 'primary', text: 'NodeJS' },
      { color: 'primary', text: 'ExpressJS' },
      { color: 'primary', text: 'ReactJS' },
      { color: 'primary', text: 'PostgreSQL' },
      { color: 'primary', text: 'MongoDB' },
      { color: 'primary', text: 'TypeORM' },
      { color: 'primary', text: 'RESTful' },
      { color: 'primary', text: 'GitHub Actions' },
      { color: 'primary', text: 'Bitbucket' },
      { color: 'primary', text: 'Jira' },
      { color: 'primary', text: 'Agile' }
    ]
  },
  {
    id: 'safe-security',
    company: 'Safe Security',
    jobTitle: 'Research and Development Intern',
    timeframe: 'Jan 2018 → June 2018',
    location: 'New Delhi, India',
    description: '',
    tags: [
      { color: 'primary', text: 'Java' },
      { color: 'primary', text: 'Programming' },
      { color: 'primary', text: 'shell programming' },
      { color: 'primary', text: 'HTML5' },
      { color: 'primary', text: 'Front-end Development' },
      { color: 'primary', text: 'AJAX' },
      { color: 'primary', text: 'Linux' },
      { color: 'primary', text: 'Version Control' },
      { color: 'primary', text: 'Bitbucket' }
    ]
  }
]
