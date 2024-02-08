import { 
  describe,
  it,
  expect,
} from "vitest";
import { mount } from '@vue/test-utils';

import LogoBlock from '../LogoBlock.vue';

const RouterLinkStub = {
  name: 'RouterLink',
  template: '<a><slot></slot></a>',
}

describe('LogoBlock', () => {
  it('should contain children', () => {
    const wrapper = mount(LogoBlock, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    const element = wrapper.find('.logo');

    if (element.exists()) {
      const children = element?.findAll('*');

      expect(children.length > 0).toBe(true);
    }
  });

  it('should contain a <a>', () => {
    const wrapper = mount(LogoBlock, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    const element = wrapper.find('a');

    expect(element.exists()).toBe(true);
  });

  it('should have a logo', () => {
    const wrapper = mount(LogoBlock, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    const element = wrapper.find('.logo');
    
    expect(element.exists()).toBe(true);
  });

  it('should have my name', () => {
    const wrapper = mount(LogoBlock, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    const element = wrapper.find('a');
    
    expect(element.text()).toBe('Taran Pierce');
  });
});
