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
        <div className='container'>
            <ProjectCard
                img='https://image.ibb.co/jPseu8/cacaushow.png'
                alt='CacauShow'
                title='Cacau Show - Landings Pages'
                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.antium, fugiat totam nesciunt neque consequuntur qui? Ratione, minima atque molestias vel sunt modi autem harum voluptatibus.'
                stack={['html', 'CSS3', 'JavaScript']}
                btns={[
                    {   icon: 'github',
                        link: 'http://www.google.com'},
                    {   icon: 'github',
                        link: 'http://www.google.com'}
                    ]}
            />

            <ProjectCard
                img='https://preview.ibb.co/mA9jBo/ugolf.png'
                alt='Ugolf'
                title='UGOLF - Eccomerce'
                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.antium, fugiat totam nesciunt neque consequuntur qui? Ratione, minima atque molestias vel sunt modi autem harum voluptatibus.'
                stack={['CMS - Loja Integrada', 'CSS3']}
                btns={[
                    {   icon: 'github',
                        link: 'http://www.google.com'},
                    {   icon: 'github',
                        link: 'http://www.google.com'}
                    ]}
            />

            <ProjectCard
                img='https://preview.ibb.co/nJHCWo/Screenshot_1.png'
                alt='EmailIfood'
                title='iFoodShop - Email Market Responsivos'
                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.antium, fugiat totam nesciunt neque consequuntur qui? Ratione, minima atque molestias vel sunt modi autem harum voluptatibus.'
                stack={['HTML', 'CSS3', 'MJML']}
                btns={[
                    {   icon: 'github',
                        link: 'http://www.google.com'},
                    {   icon: 'github',
                        link: 'http://www.google.com'}
                    ]}
            />

            <ProjectCard
                img='https://image.ibb.co/m3sFHT/emg.png'
                alt='EMG'
                title='EMG -  Gerador de Email Market Responsivos'
                desc='Projeto desenvolvido para automatizar criação de
                email-market para agencia de comunicação. Foi desenvolvido para atender a criação de emails para o iFoodShop.
                Basicamente como funciona?
                A entrada é uma planilha excel.
                Busca informações no site do iFoodShop referente ao produto da planilha.
                Gera os HTMLs de forma dinâmica.'
                stack={['NodeJS', 'JavaScript']}
                btns={[
                    {   icon: 'globe',
                        link: 'https://www.youtube.com/watch?v=vqjanNO7NL4&feature=youtu.be'},
                    ]}
            />

                <ProjectCard
                img='https://preview.ibb.co/hfwRu8/crud.png'
                alt='CRUD - REACT'
                title='CRUD -  CRUD em ReactJS'
                desc='Projeto desenvolvido para automatizar criação de
                email-market para agencia de comunicação. Foi desenvolvido para atender a criação de emails para o iFoodShop.
'
                stack={['NodeJS', 'JavaScript']}
                btns={[
                    {   icon: 'github',
                        link: 'https://github.com/victorblevi/crud-reactJS'},
                        {
                        icon: 'globe',
                        link: 'https://www.youtube.com/watch?v=vqjanNO7NL4&feature=youtu.be'},
                    ]}
            />

        </div>
    </section>
)