import { 
  describe,
  it,
  expect,
} from "vitest";
import { mount } from '@vue/test-utils';

import Page from '../../layouts/Page.vue';

const RouterLinkStub = {
  name: 'RouterLink',
  template: '<a><slot></slot></a>',
}

describe('Page', () => {
  it.skip('should container a <header>', () => {
    const wrapper = mount(Page, {
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
