"use client";
import { Check, Copy, LoaderCircle } from 'lucide-react';
import React, { useRef, useState } from 'react'
import validator from 'validator';

const Form = () => {
	const shortUrlRef = useRef<HTMLInputElement | null>(null);
	const longUrlRef = useRef<HTMLInputElement | null>(null);
	const [shortUrl, setShortUrl] = useState('');
	const [copying, setCopying] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = () => {
		setLoading(true)
		const longUrl = longUrlRef?.current?.value || '';
		
		if (!validator.isURL(longUrl, {require_protocol: true})) {
			alert("Valied URL is required.")
			setLoading(false)
			return
		}

		setShortUrl('')
		fetch('/asas', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ longUrl: longUrl }),
		})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			setLoading(false);
			if (shortUrlRef.current) {
				shortUrlRef.current.value = data.shortCode;
			}
		})
		.catch((error) => {
			alert('Error: ' + error.message);
		});
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
			<input ref={longUrlRef} className='url-input' type="url" name="long-url" id="long-url" required placeholder='Enter a long URL to shorten' />
			<button type='submit' onClick={handleSubmit} disabled={loading}>
				{ loading ? "Shortening..." : "Shorten URL" }
				{ loading? <LoaderCircle className="animate-spin" /> : null }
			</button>
			<span>Example: https://www.goole.com</span>
			<span>Shortened URL</span>
			<div className="copyble-area">
				<input className='url-input' ref={shortUrlRef} type="url" name="short-url" id="short-url" required placeholder='Your URL shortened' disabled/>
				{ 
					!copying ? <Copy onClick={handleCopy}/> : <Check className='text-green-600 !opacity-70'/>				}
			</div>
		</div>
	)
}

export default Form