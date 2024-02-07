import { 
  describe,
  it,
  expect,
} from "vitest";
import { mount } from '@vue/test-utils';

import Header from '../Header.vue';

const RouterLinkStub = {
  name: 'RouterLink',
  template: '<a><slot></slot></a>',
}

describe('Header', () => {
  it('should contain children', () => {
    const wrapper = mount(Header, {
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
    const wrapper = mount(Header, {
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
    const wrapper = mount(Header, {
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
    const wrapper = mount(Header, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    const element = wrapper.find('nav');
    
    expect(element.exists()).toBe(true);
  });

  it('should have two links in the <nav>', () => {
    const wrapper = mount(Header, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    const element = wrapper.find('nav');

    const children = element.findAll('a');
    
    expect(children.length).toBe(2);
  });
});
