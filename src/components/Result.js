import React from 'react';

function Result(props) {
    const handleReset = (e) => {
        e.preventDefault();
        props.setURL(null);
    }

    const handleDownload = (e) => {
        e.preventDefault();
        console.log('will download')
    }

    const renderResults = () => {
        return <div> Web scraped results go here </div>
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