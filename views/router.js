import { Route, IndexRoute } from 'react-router';

import App from './components/App/App';
import VotePage from './container/VotePage';
import Main from './components/modules/page/vote/Vote';

module.exports = (
    <Route path='/' component={App}>
        <IndexRoute component={VotePage}/>
    </Route>
);
