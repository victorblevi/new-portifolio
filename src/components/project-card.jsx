import React from 'react'
import Grid from '../components/grid'

export default props => (

        <div className='row project-card'>
            <Grid cols='12 6'>
                <img src={props.img} alt={props.alt} className='img-adjust'></img>
            </Grid>
            <Grid cols='12 6' >
                <h3>Gelmeza – Sistema de Custo</h3>
                <p> Este projeto consistiu em desenvolver o fluxo de cadastro de produtos, funcionários, fornecedores e custos a partir de uma
                    planilha de excel para um sistema web. O sistema foi desenvolvid
                o</p>
                <p>Tecnologias utilizadas:</p>
                <ul class="tags">
                    <li>Bootstrap 3</li>
                    <li>Express</li>
                    <li>GIT</li>
              
                </ul>
            </Grid>
        </div>

)