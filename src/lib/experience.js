const careerStartDate = 8
const careerStartMonth = 7
const careerStartYear = 2018

const careerStart = new Date(careerStartYear, careerStartMonth, careerStartDate)

export const yearsOfExperience = Math.abs(new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970)

export const profile = `Senior Full-Stack Engineer (Backend-Focused) with ${yearsOfExperience}+ years of experience building scalable systems used at enterprise and consumer scale.
Strong in system design, APIs, real-time features, and developer infrastructure. Experienced across aviation, gaming, and enterprise software, with a focus on reliability, performance, and long-term maintainability.`

export const skills = {
  frontend: ['JavaScript', 'TypeScript', 'HTML', 'JSON'],
  backend: ['Node.js', 'TypeScript', 'Express', 'Koa.js', 'NestJS', 'Java', 'API Development'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  others: [
    'Amazon AWS',
    'RESTful',
    'RabbitMQ',
    'Jira',
    'Confluence',
    'Test Driven Development',
    'Agile (Scrum, Kanban)',
    'Jest',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Unit/Integration/E2E testing',
    'Caches',
    'GitOps',
    'SSE',
    'Monolithic',
    'Microservices',
    'Client-Server',
    'Event-driven',
    'MVC'
  ]
}

export const entries = [
  {
    id: 'inform-gmbh',
    company: 'Inform GmbH',
    jobTitle: 'Senior Full Stack Developer (Backend Focused)',
    start: '06/2024',
    end: 'Present',
    current: true,
    location: 'Aachen, NRW, Germany',
    description:
      'Leading backend architecture for enterprise workforce management software used by major international airlines. Designed core infrastructure, real-time collaboration features, and system observability, while mentoring engineers and collaborating closely with architects and product leadership.',
    tags: [
      { color: 'primary', text: 'TypeScript' },
      { color: 'primary', text: 'Node.js' },
      { color: 'primary', text: 'Koa.js' },
      { color: 'primary', text: 'RabbitMQ' },
      { color: 'primary', text: 'Keycloak' },
      { color: 'primary', text: 'Docker' },
      { color: 'primary', text: 'Kubernetes' },
      { color: 'primary', text: 'Argo CD' },
      { color: 'primary', text: 'Helm charts' },
      { color: 'primary', text: 'OpenTelemetry' },
      { color: 'primary', text: 'Prometheus' },
      { color: 'primary', text: 'GitLab' },
      { color: 'primary', text: 'SonarQube' },
      { color: 'primary', text: 'Monorepo' }
    ]
  },
  {
    id: 'softgames-gmbh',
    company: 'Softgames GmbH & MobileForce',
    jobTitle: 'Senior Software Developer (Full-Stack, Backend Focused)',
    start: '12/2021',
    end: '05/2024',
    location: 'Berlin, Germany',
    description:
      'Built and scaled backend systems for high-traffic web gaming platforms distributed through global publishers. Delivered revenue-impacting features, improved performance, and reduced operational overhead across multiple products.',
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
    company: 'Zynga Game Network',
    jobTitle: 'Associate System Designer (Tech.)',
    start: '10/2020',
    end: '12/2021',
    location: 'Karnataka, India',
    description:
      'Worked on core backend systems for large-scale gaming platforms, focusing on performance, security, and scalable architecture. Mentored junior developers and contributed to improving system reliability.',
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
    start: '07/2018',
    end: '10/2020',
    location: 'Haryana, India',
    description:
      'Developed and maintained web and mobile applications used by millions of users worldwide. Contributed to core product development, system migrations, and delivery pipeline improvements.',
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
    start: '01/2018',
    end: '06/2018',
    location: 'New Delhi, India',
    description:
      'Researched real-world security vulnerabilities and attack patterns, contributed to internal security training material, and built a web-based CTF application for practicing web application penetration testing.',
    tags: [
      { color: 'primary', text: 'C#' },
      { color: 'primary', text: 'Shell Programming' },
      { color: 'primary', text: 'HTML5' },
      { color: 'primary', text: 'PHP' },
      { color: 'primary', text: 'AJAX' },
      { color: 'primary', text: 'Kali Linux' },
      { color: 'primary', text: 'Bitbucket' }
    ]
  }
]
