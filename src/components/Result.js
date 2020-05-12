import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Result(props) {
    const [imgScrape, setImgScrape] = useState(null);

    useEffect(() => {
        const webScrape = async () => {
            if (props.url === null) return;
            const url = 'http://localhost:8000/scrape/';
            axios.get(url + `res?url=https://${props.url}`)
                .then(res => {
                    console.log('scraping');
                 setImgScrape(res.data.toString());
                })
                .catch(err => {
                    console.error(err);
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
                    <img className='png' src={`data:image/png;base64, ${imgScrape}`} alt="screencap" height="20%" width="20%" />
                </a>)
        }

        return <div>
            {imgScrape !== null ? renderImage() : <></>}
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
            Thumbnail <br />
            {renderResults()}
        </>
    </div>
};

export default Result;