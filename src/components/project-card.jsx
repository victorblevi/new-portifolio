import React from 'react'
import Grid from '../components/grid'
export default props => (

    <div className='container__row project-card'>
        <div className='container__col-5'>
            <figure>
                <img src={props.img} className='img-adjust-div' alt={props.alt} />
            </figure>
        </div>
        <div className='container__col-7 padding-container flex'>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <p className='text-stack'>Tecnologias Utilizadas:</p>
            <div className='list-stack'>
                <ul>
                    {
                        props.stack.map((item, index) => (
                            <li key={index}><i className='fa fa-caret-right' /> {item}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='button-acess'>
                {
                    props.btns.map((btn, index) => (
                        <a className='button' target='_blank'
                            href={btn.link} key={index}>
                            <i className={`fa fa-${btn.icon} fa-2x`} />
                        </a>
                    ))
                }
            </div>
        </div>
    </div>

)