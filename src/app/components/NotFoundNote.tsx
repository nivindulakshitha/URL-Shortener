"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const NotFoundNote = () => {
	const searchParams = useSearchParams()
	const code = searchParams.get('code')

	if (!code) { 
		window.location.href = '/'
	}

	return (
		<>
			{code != null && (
			<div className="container">
				<span className='note-404 text-center'>404<p className='text-3xl m-0 p-0 uppercase'>{code}</p></span>
				<Image src="https://logosandtypes.com/wp-content/uploads/2020/08/sas.svg" alt='Brief Url' width={100} height={100} /> <br />
				<h1>Your shorten url is not found.</h1>
				<h2>Go to <Link className='link' href={"/"}>Home</Link> and try shortening again.</h2>
			</div>
			)}
		</>
	)
}

export default NotFoundNote