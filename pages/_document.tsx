import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/favicon.ico" sizes="any" type="image/png+xml" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
