import React from 'react';
import { act, create } from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';

import Index from './Index';

jest.mock('expo', () => ({
  AppLoading: 'AppLoading',
  Linking: {
    makeUrl: () => '/'
  },
  SplashScreen: {
    preventAutoHide: () => 'preventAutoHide',
    hide: () => 'hide'
  }
}));

describe('App', () => {
  jest.useFakeTimers();

  afterEach(() => {
    NavigationTestUtils.resetInternalState();
  });


  it(`renders the loading screen`, async () => {
    let tree;
    await act(async () => {
      tree = await create(<Index />);
    });
    expect(tree).toMatchSnapshot();
  });

  it(`renders the root without loading screen`, async () => {
    let tree;
    await act(async () => {
      tree = await create(<Index skipLoadingScreen />);
    });
    expect(tree).toMatchSnapshot();
  });
});
