import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Result(props) {
    const [imgScrape, setImgScrape] = useState(null);

    useEffect(() => {
        const webScrape = async () => {
            if (props.url === null) return;
            const url = 'http://localhost:8000/scrape/';
            console.log('scraping');
            axios.get(url + `res?url=https://${props.url}`)
                .then(res => {
                    console.log('scraping complete');
                    if (res.data === 'error') return setImgScrape(undefined);
                 setImgScrape(res.data.toString());
                });
        }
        webScrape();
    }, [props.url, setImgScrape])


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
        const redirectImage = () => {
            const w = window.open();
            setTimeout(()=> {
                w.document.body.appendChild(w.document.createElement('img'))
                .src = `data:image/png;base64,${imgScrape}`
            }, 10);
        };

        const renderImage = () => {
            return (
                <a href={`data:image/png;base64, ${imgScrape}`} onClick={redirectImage}> 
                    <img className='png' src={`data:image/png;base64, ${imgScrape}`} alt="screencap" height="auto" width="10%" />
                </a>)
        }

        return <div>
            {imgScrape !== null ? imgScrape !== undefined ? renderImage() : "Site not found" : 'Searching...'}
            <br />
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
        <br />
        <>
            {renderResults()}
        </>
    </div>
};

export default Result;