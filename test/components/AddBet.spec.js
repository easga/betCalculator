import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import AddBet from '../../common/components/AddBet';
import SingleInputForm from '../../common/components/SingleInputForm';

describe('<AddBet />', () => {
  const options = {
    currentBet: {
      value: 'w:2:2'
    },
    dispatch: () => {}
  };

  it('renders a SingleInputForm', () => {
    const wrapper = shallow(<AddBet {...options} />);
    expect(wrapper.find(SingleInputForm)).to.have.length(1);
  });
});
