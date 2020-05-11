import React, { useState } from 'react';
import Form from './Form';
import Result from './Result';

function Body() {
    const [URL, setURL] = useState(null);
    const [keyword, setKeyword] = useState(null);

    return <div className='body'>
        {URL === null ? 
            <Form setURL={setURL} setKeyword={setKeyword} /> :
            <Result setURL={setURL} setKeyword={setKeyword} keyword={keyword} />
        }
    </div>
};

export default Body;