import React from 'react';

function Form(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = document.body.getElementsByClassName('url')[0];
        if (url.value === "") {
            window.alert('Please enter a url')
        } else {
            props.setURL(url.value);
            const keyword = document.body.getElementsByClassName('key')[0]
            props.setKeyword(keyword.value);
        };
    };

    return <div className='form'> 
        Enter the URL
        <div className='temp'>
            <input className='url' type="text" placeholder="www.example.com" />
        </div>
        <br />

        Optionally enter a keyword
        <div className='temp'>
            <input className='key' type="text" placeholder="cats" />
        </div>
        <br />
        <button className='button' onClick={handleSubmit}>Submit</button>
     </div>
}

export default Form;