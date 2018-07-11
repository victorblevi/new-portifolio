import React, { Component } from 'react';

export default class Portifolio extends Component {

    render() {

        return (
            <section id='curriculo' className='content-page bg-curriculo'>
                <div className='center'>
                    <a  target='blank' href='https://doc-08-9k-apps-viewer.googleusercontent.com/viewer/secure/pdf/3ojs3o54ia5bksabkebaedqngcdrtpta/sqmkl3cvckueni9ft8343l7oillhkt68/1531262475000/lantern/11057488811883625761/ACFrOgBF_m_n3u5PSll5nm9x8R8fWM_LEm1soh9sfGMZGQQmBHvk014U7OILSfLInFlbrfyHtzJkR_mBJhJusRU_7mZQ-XHRlMnntpyXHvN4HOH6UIbR1ZvJfL1IB6YOQKF4shds77ANBhzmEkP6?print=true'><button>DOWNLOAD CV <i className="fa fa-cloud-download fa-1x" /></button></a>
                </div>
                <embed src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://victorblevi.github.io/cv.pdf"
                    className='bg-pdf' />
            </section>

        );
    }
}
