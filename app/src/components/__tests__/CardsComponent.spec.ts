import { 
  describe,
  it,
  expect,
} from "vitest";
import { mount } from '@vue/test-utils';

import CardsComponent from '../CardsComponent.vue';

describe('CardsComponent', () => {
  it('should contain children', () => {
    const wrapper = mount(CardsComponent, {
      props: {
        cardItems: [
          {
            name: 'Contentful',
            contents: [
              'sample paragraph',
            ],
            featureList: []
          }
        ]
      }
    });

    const element = wrapper.find('.item-list-wrapper');

    expect(element.exists()).toBe(true);
  });

  it('should have correct <h4>', () => {
    const wrapper = mount(CardsComponent, {
      props: {
        cardItems: [
          {
            name: 'Contentful',
            contents: [
              'sample paragraph',
            ],
            featureList: []
          }
        ]
      }
    });

    const headingText = wrapper.find('h4');

    expect(headingText.text()).toBe('Contentful');
  });

  it('should contain paragraph content', () => {
    const wrapper = mount(CardsComponent, {
      props: {
        cardItems: [
          {
            name: 'Contentful',
            contents: [
              'sample paragraph',
            ],
            featureList: []
          }
        ]
      }
    });

    const paragraphs = wrapper.findAll('p');

    expect(paragraphs.length >= 1).toBe(true);
  });

  it('should contain features when passed', () => {
    const wrapper = mount(CardsComponent, {
      props: {
        cardItems: [
          {
            name: 'Contentful',
            contents: [
              'sample paragraph',
            ],
            featureList: [
              {
                heading: "test headign",
                content: '- test content',
              }
            ]
          }
        ]
      }
    });

    const list = wrapper.find('ul');
    const listItems = wrapper.find('li');

    expect(list.exists()).toBe(true);
    expect(listItems.exists()).toBe(true);
  });
});
