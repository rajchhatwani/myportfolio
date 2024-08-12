/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Clementius LLP',
    position: 'JavaScript Developer Intern',
    url: 'https://clementius.com',
    startDate: '2023-07-15',
    endDate: '2024-01-15',
    summary: `Collaborated with different teams and understood the requirement of project, and wrote code accordingly.
  Assisted with an existing project, helping frontend team by building many responsive UI's using ReactJS.
  Also, developed API's using ExpressJS and maintained them over time for optimal performance.
`,
    highlights: [
      'Led frontend development from scratch using ReactJS and built optimized UI components.',
      `Built RESTful API's and maintained using NodeJS and ExpressJS, and developed versioned and clean API's
      and used best practices for idempotency, sorting, filtering for good performance.`,
      'Implemented user authorization and authentication using JWT and Cookies',
      'Integrated blockchain function, which were readily build by web3 developers.',
    ],
  },
];

export default work;
