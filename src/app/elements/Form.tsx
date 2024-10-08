"use client";
import { Check, Copy, LoaderCircle } from 'lucide-react';
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
			<button type='submit' onClick={handleSubmit} disabled={loading}>
				{ loading ? "Shortening..." : "Shorten URL" }
				{ loading? <LoaderCircle className="animate-spin" /> : null }
			</button>
			<span>Example: https://www.goole.com</span>
			<span>Shortened URL</span>
			<div className="copyble-area">
				<input className='url-input' ref={shortUrlRef} onInput={handleInputLongUrl} type="url" name="short-url" id="short-url" required placeholder='Your URL shortened' disabled />
				{ 
					!copying ? <Copy onClick={handleCopy}/> : <Check className='text-green-600 !opacity-70'/>				}
			</div>
		</div>
	)
}

export default Form