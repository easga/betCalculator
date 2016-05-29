import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BetTable from '../../common/components/BetTable';
import ListItem from '../../common/components/ListItem';
import { validBetsState } from '../mocks/betsMock';

describe('<BetTable />', () => {
  const options = {
    title: 'Win',
    bets: validBetsState.W.bets,
    totalStakes: validBetsState.W.totalStakes
  };

  it('renders 12 ListItems', () => {
    const wrapper = shallow(<BetTable {...options} />);
    expect(wrapper.find(ListItem)).to.have.length(12);
  });

  it('renders .card-footer when there is totalStakes', () => {
    const wrapper = shallow(<BetTable {...options} />);
    expect(wrapper.find('.card-footer')).to.have.length(1);
  });

  it('renders .card-header', () => {
    const wrapper = shallow(<BetTable {...options} />);
    expect(wrapper.find('.card-header')).to.have.length(1);
  });
});
