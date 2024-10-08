"use client";
import React, { useRef, useState } from 'react'

const Form = () => {
	const shortUrlRef = useRef<HTMLInputElement | null>(null);
	const [copying, setCopying] = useState(false);
	const [loading, setLoading] = useState(false);
	const handleInputLongUrl = () => {
		console.log("input long url")
	}

	const handleSubmit = () => {
		setLoading(true)
		console.log("submit")
	}

	const handleCopy = () => {
		const shortUrl = shortUrlRef?.current?.value || '';
		if (shortUrl === '') {
			alert("Shortened URL not found");
		} else {
			navigator.clipboard.writeText(shortUrl);
			setCopying(true);
			setTimeout(() => { 
				setCopying(false)
			}, 3000);
		}
	}

	return (
		<div className='form-element'>
			<h2 className="head-text">URL Shortener</h2>
			<input className='url-input' onInput={handleInputLongUrl} type="url" name="long-url" id="long-url" required placeholder='Enter a long URL to shorten' />
			<button onClick={handleSubmit} disabled={loading}>
				{ loading? "Shortening..." : "Shorten URL" }
			</button>
			<span>Example: https://www.goole.com</span>
			<span>Shortened URL</span>
			<div className="copyble-area">
				<input className='url-input' ref={shortUrlRef} onInput={handleInputLongUrl} type="url" name="short-url" id="short-url" required placeholder='Your URL shortened' disabled />
				{
					!copying ? <svg onClick={handleCopy} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00FF00"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>

				}
			</div>
		</div>
	)
}

export default Form