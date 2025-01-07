import React from 'react'
import Form from './components/Form'
import { ThemeProvider } from 'next-themes'

const Page = () => {	
	return (
		<ThemeProvider attribute="class">
			<Form />
		</ThemeProvider>
	)
}

export default Page