import { Provider } from 'react-redux';
import configureStore from '../../redux/store/configureStore';

import Header from '../modules/header/Header';
import Footer from '../modules/footer/Footer';

const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header/>

                    {this.props.children}

                    <Footer/>
                </div>
            </Provider>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.object
};

