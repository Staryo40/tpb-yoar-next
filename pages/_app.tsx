import '../styles/CommonStyles/Text.css'
import '../styles/CommonStyles/Component.css'
import '../styles/CommonStyles/Bigbox.css'
import '../styles/CommonStyles/SideNav.css'
import '../styles/CommonStyles/Global.css'
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;