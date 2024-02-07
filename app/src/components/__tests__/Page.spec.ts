import { 
  describe,
  it,
  expect,
} from "vitest";

import { mount } from '@vue/test-utils';


import Page from '../Page.vue';

const testComponent = {
  name: 'testComponent',
  template: '<p>Sample text in a sample test component</p>',
}

const RouterLinkStub = {
  name: 'RouterLink',
  template: '<a><slot></slot></a>',
}

describe('Page', () => {
  it('should contain children', () => {
    const wrapper = mount(Page, {
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

  it('should have a logo', () => {
    const wrapper = mount(Page, {
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
    const wrapper = mount(Page, {
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
    const wrapper = mount(Page, {
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
