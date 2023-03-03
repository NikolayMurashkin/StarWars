import '@/styles/globals.css';
import { Layout } from '@/shared/ui/layout/Layout';

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
