"use client";
import React, { useState } from 'react'

const Form = () => {
	const [loading, setLoading] = useState(false);
	const handleInputLongUrl = () => {
		console.log("input long url")
	}

	const handleSubmit = () => {
		setLoading(true)
		console.log("submit")
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
				<input className='url-input' onInput={handleInputLongUrl} type="url" name="short-url" id="short-url" required placeholder='Your URL shortened' />
			</div>
		</div>
	)
}

export default Form