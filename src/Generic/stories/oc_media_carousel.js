import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { OCMediaCarousel } from '~/';

const ProfileMorePhotosStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  padding: '3px 10px',
  height: '96px',
  width: '96px',
};

storiesOf('OCMediaCarousel', module)
  .addDecorator(story => (
    <div
      style={{
        width: '100%',
        margin: 'auto',
        position: 'relative',
      }}
    >
      {story()}
    </div>
  ))
  .add('Carousel', () => {
    const style = {
      margin: '4px',
      backgroundColor: 'transparent',
    };
    const data = [
      'https://s2.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg',
      'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
      'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
    ];

    const profilePhotos = data.map((item, index) => (
      <img
        src={item}
        key={index}
        style={{ ...ProfileMorePhotosStyles, ...style }}
        role="presentation"
      />
    ));

    const story = (
      <OCMediaCarousel
        children={profilePhotos}
        style={{ width: '100%' }}
        numElementsPerPanel={2}
        title={`${data.length} Items`}
      />
    );

    return story;
  });
