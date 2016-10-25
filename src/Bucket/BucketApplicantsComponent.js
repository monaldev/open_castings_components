/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import faker from 'faker';
import {
  Card,
  List,
  ListItem,
  Subheader,
  Avatar,
} from 'material-ui';
// import { Scrollbars } from 'react-custom-scrollbars';

export default class BucketViewComponent extends React.Component {
  // <Scrollbars
  //   style={{
  //     position: 'absolute',
  //     width: '100%',
  //     top: 0,
  //     bottom: 0
  //   }}
  //   hideTracksWhenNotNeeded={false}
  //   autoHide
  // >
  render() {
    const n = 13;
    const tree = [];
    for (let i = 0; i < n; i++) {
      tree.push({
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        avatar: faker.image.avatar(),
        email: 'test@test.com',
      });
    }
    return (
      <Card
        style={{
          width: '25%',
          height: '100%',
          display: 'flex',
        }}
        containerStyle={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'stretch',
            alignItems: 'stretch',
          }}
        >
          <Subheader>Candidates</Subheader>
          <div
            style={{
              position: 'relative',
              width: '100%',
              flex: 1,
              margin: 0,
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '100%',
                top: 0,
                bottom: 0,
                overflow: 'auto',
              }}
            >
              <List>
                {
                  tree.map(
                    (candidate, index) => (
                      <ListItem
                        key={index}
                        style={{ background: 'transparent' }}
                        primaryText={candidate.name}
                        secondaryText={candidate.email}
                        leftAvatar={<Avatar src={candidate.avatar} />}
                      />
                    )
                  )
                }
              </List>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}
