/**
 * Created by nsnik on 10/11/2016.
 */
import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { ProfileMorePhotosItem } from '~/';
import LoadMuiTheme from '~/.storybook/load_mui_theme';

storiesOf('ProfileMorePhotosItem', module)
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
        const data = 'https://s2.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg';
        const story = (
            <ProfileMorePhotosItem data={data} style = {style} />
        );
        return story;
    });
