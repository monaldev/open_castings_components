import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { ProfileMorePhotos } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProfileMorePhotos', module)
.addDecorator(story => (
    <LoadMuiTheme>
        <div
        style={{
            width: '600px',
                margin: 'auto',
                position: 'relative',
        }}
        >
        {story() }
        </div>
    </LoadMuiTheme>
    ))
.add('preview', () => {
    const style={
        margin: '4px',
        backgroundColor: 'transparent',
    };
    const data = [
        'https://s2.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg'
        ,'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg'
        ,'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header'
    ];
    const story = (
        <ProfileMorePhotos
            data={data}
            style = {style}
        />
    );
    return story;
});
