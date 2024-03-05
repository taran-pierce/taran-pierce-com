import { 
  describe,
  it,
  expect,
} from "vitest";
import { mount } from '@vue/test-utils';

// pull in the main link list from that navigation
// so it stays in sync
import { mainLinks } from '../NavigationMain.vue';

import HeaderBar from '../HeaderBar.vue';

const RouterLinkStub = {
  name: 'RouterLink',
  template: '<a><slot></slot></a>',
}

describe('Header', () => {
  it('should contain children', () => {
    const wrapper = mount(HeaderBar, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    const element = wrapper.find('header');

    if (element.exists()) {
      const children = element?.findAll('*');

      expect(children.length > 0).toBe(true);
    }
  });

  it('should container a <header>', () => {
    const wrapper = mount(HeaderBar, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    const element = wrapper.find('header');

    expect(element.exists()).toBe(true);
  });

  it('should have a logo', () => {
    const wrapper = mount(HeaderBar, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    const element = wrapper.find('.logo');
    
    expect(element.exists()).toBe(true);
  });

  it('should have a <nav>', () => {
    const wrapper = mount(HeaderBar, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    const element = wrapper.find('nav');
    
    expect(element.exists()).toBe(true);
  });

  it('should have links in the <nav>', () => {
    const wrapper = mount(HeaderBar, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    const element = wrapper.find('nav');

    const children = element.findAll('a');
    
    expect(children.length).toBe(mainLinks.length);
  });
});
