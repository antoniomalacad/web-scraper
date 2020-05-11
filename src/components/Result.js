import React from 'react';
import axios from 'axios';

function Result(props) {
    const scrape = async () => {
        if (props.url === null) return;
        axios.get(props.url)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }
    scrape();

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
            {props.keyword.length === 0 ?
             "No specified keyword" : `Your keyword is ${props.keyword}`}
        </div>
    }

    return <div className='result'>
         Result 
        <br />
        <button className='button' onClick={handleReset}>
            Reset
        </button>
        <button className='button' onClick={handleDownload}>
            Download
        </button>
        <>
            {renderResults()}
        </>
    </div>
};

export default Result;