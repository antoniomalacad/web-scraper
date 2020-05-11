import React, { useState } from 'react';
import Form from './Form';
import Result from './Result';

function Body() {
    const [URL, setURL] = useState(null);

    return <div className='body'>
        {URL === null ? 
            <Form setURL={setURL}/> :
            <Result setURL={setURL}/>
        }
    </div>
};

export default Body;