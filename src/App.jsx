import React from 'react'
import './styles/styles.css'

import scraper from './assets/scraper1.png'
import picture2 from './assets/reddit-nlp.png'
import groceasy1 from './assets/groceasy1.png'
import clone from './assets/clone-game.png'

import Card from './components/Card'
import Tag from './components/Tag';

function App() {

  const projects = [
    {
      image: clone,
      title: 'Connections Clone',
      description: "A clone of the popular NY Times  'Connections' game. Click for live demo, repo available at https://github.com/mwithe/connections-clone",
      skills: ['JavaScript', 'React', 'NodeJS', 'ExpressJS'],
      link: 'https://connections-clone.vercel.app/',
    },
    {
      image: scraper,
      title: 'Recipe Scraper',
      description: 'An reenvisioning of a university assignment, this personal project scrapes recipes from the web as a means to combat my crippling inability to do efficient grocery shopping.',
      skills: ['Python', 'JavaScript', 'Flask', 'React'],
      link: 'https://github.com/mwithe/meal-planner',
    },
    {
      image: picture2,
      title: 'Reddit Sentiment Analyser',
      description: 'Full-stack web application deployed to AWS, with instance scaling. Performed named-entity recognition and sentiment analysis on comments pulled from Reddit API, using Node-NLP.',
      skills: ['AWS', 'Natural Language Processing', 'JavaScript', 'NodeJS', 'ExpressJS'],
      link: 'https://github.com/mwithe/reddit-nlp-sentiment-analyser',
    },
    {
      image: groceasy1,
      title: 'Grocer-easy',
      description: `Web application deployed to AWS ec2 instance with Docker. Utilised API calls to calculate nutritional information and health warnings based on a user's groceries.`,
      skills: ['Docker', 'AWS', 'JavaScript', 'NodeJS', 'ExpressJS'],
      link: 'https://github.com/mwithe/grocer-easy',
    }
  ]

  const skills = {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    backend: ['Python', 'Flask', 'NodeJS', 'ExpressJS', 'MongoDB', 'AWS'],
    security: ['NIST RMF', 'NIST CSF', 'Packet Analysis', 'Fuzzing']
  }

  return (
    <main>
      <body className='main-content'>
        <div className='profile-section'>
          <div className='profile-description'>
            <div className='circle'></div>
            <div className='circle2'></div>
            <div className='circle3'></div>
            <h1 className='animate-title-left'>&#128075; Hi, I'm Matt Withey</h1>
            <p>Aspiring developer, security enthusiest and devout broncos fan, with interests in full-stack development and application security.</p>
            <br></br>
            <p>As of 2024, I have three subjects remaining in Master's of IT (CompSci) at QUT.</p>
          </div>
          <div className='profile-skills'>
            <h3 className='animate-title-right'>Front End</h3>
            <hr className='divider'></hr>
            <div className='skills'>
              {skills.frontend.map((skill) => (
                <Tag skill={skill} />
              ))}
            </div>
            <h3 className='sub-heading animate-title-right'>Back End</h3>
            <hr className='divider'></hr>
            <div className='skills'>
              {skills.backend.map((skill) => (
                <Tag skill={skill} />
              ))}
            </div>
            <h3 className='sub-heading animate-title-right'>Security</h3>
            <hr className='divider'></hr>
            <div className='skills'>
              {skills.security.map((skill) => (
                <Tag skill={skill} />
              ))}
            </div>
          </div>
        </div>
        <div className='projects-section'>
          <h2 className='animate-title-left'>Recent Projects</h2>
          {projects.map((project) => (
            <Card {...project} />
          ))}
        </div>
      </body>
    </main>
  )
}

export default App
