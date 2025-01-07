import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<span className='text-8xl absolute opacity-5 font-bold -rotate-45 -translate-x-1/4 -translate-y-1/2 text-black dark:text-white'>404</span>
			<Image src="https://logosandtypes.com/wp-content/uploads/2020/08/sas.svg" alt='Brief Url' width={100} height={100} /> <br />
			<h1>Your shorten url is not found.</h1>
			<h2>Go to <Link className='underline cursor-pointer text-blue-500 hover:text-blue-600 active:text-blue-500' href={"/"}>Home</Link> and try shortening again.</h2>
		</div>
	)
}

export default NotFound