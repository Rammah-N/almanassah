import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/dist/shared/lib/head";
/* 
TODO: 
  Pages: Homepage, About, Reports, Open Spaces, Contact, DFC, Registration Page, Login Page.
TODO: 
  Components: Layout wrapper, Nav Component, Menu, Footer, PrimaryBtn, SecondaryBtn, HomeSlider, HomeSlider Item, Documents, Documents Item, OpenSpace Component  
*/

function MyApp({ Component, pageProps, jwt }) {
	return (
		<Layout jwt={jwt}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}
export async function getServerSideProps(ctx) {
	console.log(jwt);
	const jwt =
		parseCookies(ctx).jwt !== undefined ? parseCookies(ctx.jwt) : null;
	return {
		props: {
			jwt: jwt,
		},
	};
}
export default MyApp;
