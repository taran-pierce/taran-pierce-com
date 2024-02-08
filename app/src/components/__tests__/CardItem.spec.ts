import { 
  describe,
  it,
  expect,
} from "vitest";
import { mount } from '@vue/test-utils';

import CardItem from '../CardItem.vue';

describe('CardItem', () => {
  it('should contain children', () => {
    const wrapper = mount(CardItem, {
      props: {
        cardItem: {
          name: 'Test Heading',
        }
      }
    });

    const element = wrapper.find('.item');

    expect(element.exists()).toBe(true);
  });

  it('should have correct <h4>', () => {
    const wrapper = mount(CardItem, {
      props: {
        cardItem: {
          name: 'Test Heading',
        }
      }
    });

    const headingText = wrapper.find('h4');

    expect(headingText.text()).toBe('Test Heading');
  });

  it('should contain paragraph content', () => {
    const wrapper = mount(CardItem, {
      props: {
        cardItem: {
          name: 'Test Heading',
          contents: [
            'Sample paragraph here.',
          ],
        }
      }
    });

    const paragraphs = wrapper.findAll('p');

    expect(paragraphs.length >= 1).toBe(true);
  });

  it('should contain features when passed', () => {
    const wrapper = mount(CardItem, {
      props: {
        cardItem: {
          name: 'Test Heading',
          contents: [
            'Sample paragraph here.',
          ],
          featureList: [
            {
              heading: 'Heading',
              content: '- sample paragraph here.',
            }
          ],
        }
      }
    });

    const list = wrapper.find('ul');

    expect(list.exists()).toBe(true);

    const headingText = list.find('strong');
    const contentText = list.find('span');

    expect(headingText.exists()).toBe(true);
    expect(contentText.exists()).toBe(true);
  });
});
