import "../styles/globals.css";
import Layout from "./components/Layout";
/* 
TODO: 
  Pages: Homepage, About, Reports, Open Spaces, Contact, DFC, Registration Page, Login Page.
TODO: 
  Components: Layout wrapper, Nav Component, Menu, Footer, PrimaryBtn, SecondaryBtn, HomeSlider, HomeSlider Item, Documents, Documents Item, OpenSpace Component  
*/

function MyApp({ Component, pageProps, jwt }) {
	return (
			<Layout jwt={jwt}>
				<Component {...pageProps} />
			</Layout>
	);
}
export async function getServerSideProps(ctx) {
	const jwt =
		parseCookies(ctx).jwt !== undefined ? parseCookies(ctx.jwt) : null;
	return {
		props: {
			jwt: jwt
		},
	};
}
export default MyApp;
