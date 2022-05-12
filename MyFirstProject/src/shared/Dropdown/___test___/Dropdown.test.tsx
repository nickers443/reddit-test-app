import React from 'react'
import { shallow } from 'enzyme'
import { Dropdown } from '../Dropdown'

describe('Dropdown', () => {
  test('should render', () => {
    const wrapper = shallow(<Dropdown button={<div />} children={<button />} />)
    expect(wrapper).toBeDefined()
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy()
  })

  test('should render snapshot', () => {
    const wrapper = shallow(<Dropdown button={<div />} children={<button />} />)

    expect(wrapper).toMatchSnapshot()
  })
})
