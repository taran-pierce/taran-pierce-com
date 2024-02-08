import { 
  describe,
  it,
  expect,
} from "vitest";
import { mount } from '@vue/test-utils';

import PageLayout from '../../layouts/PageLayout.vue';

const RouterLinkStub = {
  name: 'RouterLink',
  template: '<a><slot></slot></a>',
}

describe('PageLayout', () => {
  it('should container a <header>', () => {
    const wrapper = mount(PageLayout, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    const element = wrapper.find('header');

    expect(element.exists()).toBe(true);
  });
});
