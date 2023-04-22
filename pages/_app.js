import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from '@/store';
import '@/styles/globals.scss';
if (typeof window !== 'undefined') {
    // Cargar estilos de Boostrap en el cliente
    import('bootstrap/dist/css/bootstrap.min.css');
    import('bootstrap/dist/js/bootstrap.bundle.min');
};

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};