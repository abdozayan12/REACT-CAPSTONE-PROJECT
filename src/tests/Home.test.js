import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Homepage from '../pages/Home';

describe('Homepage component test', () => {
  it('should render Home page correctly', () => {
    const homepage = render(
      <Router>
        <Provider store={store}>
          <Homepage />
        </Provider>
      </Router>,
    );

    expect(homepage).toMatchSnapshot();
  });
});
