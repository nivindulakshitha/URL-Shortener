import React from 'react'
import Form from './components/Form'
import { ThemeProvider } from 'next-themes'

const page = () => {
	return (
		<ThemeProvider attribute="class">
			<Form />
		</ThemeProvider>
	)
}

export default page