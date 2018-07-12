import React from 'react';
import ProjectCard from '../components/project-card'

export default props => (
    <section id='portifolio' className='bg-portifolio content-page'>
        <h2>
            Portifólio_
        </h2>
        <h3>
            Meus últimos trabralhos
        </h3>
        <div className='container--fluid'>
            <ProjectCard
                img='https://francisgregori.com.br/wp-content/uploads/2018/05/dce-featured-1-500x500.jpg'
                alt='Cacau Show'
            />
        </div>
    </section>
)