import { Provider } from 'react-redux';

import '@/styles/globals.css';
import { Layout } from '@/shared/ui/layout/Layout';
import { store } from '../redux/store/index';

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
