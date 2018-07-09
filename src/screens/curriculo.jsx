import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

export default class Portifolio extends Component {

    constructor(props) {
        super(props)
        this.state = {
            numPages: null,
            pageNumber: 1,
        }
        this.onDocumentLoad = this.onDocumentLoad.bind(this)
    }

    onDocumentLoad ({ numPages }) {
        this.setState({ numPages });
    }
    
    render() {

        const { pageNumber } = this.state;
        return (
            <section  id='curriculo' className='content-page bg-curriculo'>
                <div>
                <Document 
                    file="cv.pdf"
                    onLoadSuccess={this.onDocumentLoad}
                >
                    <Page pageNumber={pageNumber} scale={2} className='center'/>
                </Document>
                </div>
            </section>
        );
    }
}
