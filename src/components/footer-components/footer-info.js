import  React from 'react';

import './../../styles-components/footer-components/footer-info.css'

export default (props) => {

    return <div dangerouslySetInnerHTML={{ __html: props.info }} id="footer-info" />
}

