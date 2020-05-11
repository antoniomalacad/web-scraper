import React from 'react';

function Result(props) {
    const handleReset = (e) => {
        e.preventDefault();
        props.setURL(null);
        props.setKeyword(null);
    }

    const handleDownload = (e) => {
        e.preventDefault();
        console.log('will download')
    }

    const renderResults = () => {
        return <div>
            <br />
            {props.keyword  === null ?
             "No specified keyword" : `Your keyword is ${props.keyword}`}
        </div>
    }

    return <div className='result'>
         Result 
        <br />
        <>
            {renderResults()}
        </>
        <button className='button' onClick={handleReset}>
            Reset
        </button>
        <button className='button' onClick={handleDownload}>
            Download
        </button>
    </div>
};

export default Result;