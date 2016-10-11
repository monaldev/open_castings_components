import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { ocMediaCarousel } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ocMediaCarousel', module)
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
    const story = (
      <ocMediaCarousel style={{ width: '100%' }} numElementsPerPanel={5}>
        <img src="http://r.ddmcdn.com/s_f/o_1/APL/uploads/2014/04/1394744078947pembcorg.jpg" alt="" />
        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQOFRuVmGgjYzZ7gJsZpWlGf5YR2nALoSpiRIty2EpbdkwBIx-1OQ" alt="" />
      </ocMediaCarousel>
    );

    return story;
  });
