import { 
  describe,
  it,
  expect,
} from "vitest";
import { mount } from '@vue/test-utils';

import NavigationMain from '../NavigationMain.vue';

const RouterLinkStub = {
  name: 'RouterLink',
  template: '<a><slot></slot></a>',
}

const mainLinks = [
  {
    name: 'Home',
  },
  {
    name: 'About',
  }
];

describe('NavigationMain', () => {
  it('should contain children', () => {
    const wrapper = mount(NavigationMain, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    const element = wrapper.find('nav');

    if (element.exists()) {
      const children = element?.findAll('*');

      expect(children.length > 0).toBe(true);
    }
  });

  it('should contain two links', () => {
    const wrapper = mount(NavigationMain, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    const elements = wrapper.findAll('a');

    // only have two links for now
    expect(elements.length).toBe(2);
  });

  it('should have correct name and href in links', () => {
    const wrapper = mount(NavigationMain, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    const links = wrapper.findAll('a');

    links.forEach((link, index) => {

      // TODO figure out how to test the Vue router link href
      // its a "to" instead of "href"
      expect(link.text()).toBe(mainLinks[index].name);
    });
  });
});
