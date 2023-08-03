import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CountryBox from '../components/country';
import store from '../redux/store';
import '@testing-library/jest-dom';

describe('CountryBox component test', () => {
  const yemen = {
    flag: 'https://flagcdn.com/w320/ye.png',
    name: 'Yemen',
    pop: 29830000,
    id: 'b235b6cd-63de-461f-97ab-a8cfb49ea39b',
    alt: 'flag of Yemen',
  };

  it('Check if the component changed', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <CountryBox
              key={yemen.id}
              id={yemen.id}
              name={yemen.name}
              flag={yemen.flag}
              pop={yemen.pop}
              alt={yemen.alt}
            />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Check if the component CountryBox container is there', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CountryBox
            key={yemen.id}
            id={yemen.id}
            name={yemen.name}
            flag={yemen.flag}
            pop={yemen.pop}
            alt={yemen.alt}
          />
        </BrowserRouter>
      </Provider>,
    );
    const container = await screen.findByTestId('box');
    expect(container).toBeInTheDocument();
  });
});
