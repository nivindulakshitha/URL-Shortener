import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
	const { systemTheme, setTheme } = useTheme();

	if (systemTheme === 'dark') {
		setTheme('dark')
	} else {
		setTheme('light')
	}

	return (
		<div className="container">
			<span className='note-404'>404</span>
			<Image src="https://logosandtypes.com/wp-content/uploads/2020/08/sas.svg" alt='Brief Url' width={100} height={100} /> <br />
			<h1>Your shorten url is not found.</h1>
			<h2>Go to <Link className='link' href={"/"}>Home</Link> and try shortening again.</h2>
		</div>
	)
}

export default NotFound