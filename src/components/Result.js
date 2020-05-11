import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Result(props) {
    const [scrape, setScrape] = useState(null);

    useEffect(() => {
        const webScrape = async () => {
            if (props.url === null) return;
            const url = 'http://localhost:8000/scrape/';
            axios.get(url + `res?url=${props.url}`)
                .then(res => {
                    console.log(res.data.toString());
                    setScrape(res.data.toString());
                })
                .catch(err => {
                    console.error(err);
                });
        }
        webScrape();
    }, [props.url, setScrape])


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
        const renderImage = () => {
            return <img src={`data:image/png;charset=utf-8;base64, ${scrape}`} alt="screencap"/>
        }

        return <div>
            {scrape !== null ? renderImage() : <></>}
            <br />
            {props.keyword.length === 0 ?
             "No specified keyword" : `Your keyword is ${props.keyword}`}
        </div>
    };

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