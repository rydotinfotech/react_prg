import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from './image';


Enzyme.configure({ adapter: new Adapter() });
describe('Image', () => {
    it("should show image", () => {
        const wrapper = shallow(<Image />);
         wrapper.find('canvas');
    })
})