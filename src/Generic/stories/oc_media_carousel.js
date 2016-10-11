import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { OCMediaCarousel, ProfileMorePhotos } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('OCMediaCarousel', module)
  .addDecorator(story => (
    <LoadMuiTheme>
      <div
        style={{
          width: '100%',
          margin: 'auto',
          position: 'relative',
        }}
      >
        {story()}
      </div>
    </LoadMuiTheme>
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

    const profilePhotos = (<ProfileMorePhotos data={data} style={style} />);

    const story = (
      <OCMediaCarousel
        children={[1, 2, 3, 4, 5, 6, 7, 8]}
        style={{ width: '100%' }}
        numElementsPerPanel={3}
      />
    );

    return story;
  });
