import { 
  describe,
  it,
  expect,
} from "vitest";
import { mount } from '@vue/test-utils';

import ContentContainer from '../ContentContainer.vue';

const testComponent = {
  name: 'testComponent',
  template: '<p>Sample text in a sample test component</p>',
}

describe('Container', () => {
  it('does not break with no children', () => {
    const wrapper = mount(ContentContainer);

    const element = wrapper.find('.container');
    const children = element.findAll('*');

    expect(children.length).toBe(0);
  });

  it('renders properly with children', () => {
    const wrapper = mount(ContentContainer, {
      slots: {
        default: [testComponent],
      }
    });

    expect(wrapper.text()).toContain('Sample text in a sample test component');
  });
});
