import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SingleInputForm from '../../common/components/SingleInputForm';
import Alert from '../../common/components/Alert';

describe('<SingleInputForm />', () => {
  const options = {
    value: 'w:2:2',
    handleSubmit: () => {},
    handleChange: () => {}
  };

  it('renders an .input-group', () => {
    const wrapper = shallow(<SingleInputForm {...options} />);
    expect(wrapper.find('.input-group')).to.have.length(1);
  });

  it('does not render an Alert when there is no error', () => {
    const wrapper = shallow(<SingleInputForm {...options} />);
    expect(wrapper.find(Alert)).to.have.length(0);
  });

  it('renders an Alert if there is an alert', () => {
    const wrapper = shallow(<SingleInputForm {...options} error={'Something wrong'} />);
    const alertProps = wrapper.find(Alert).get(0).props;
    expect(alertProps.message).to.equal('Something wrong');
  });
});
