import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { ProfileBasicStats } from '~/';

storiesOf('ProfileBasicStats', module)
.addDecorator(story => (
      <div
        style={{
          width: '300px',
          margin: 'auto',
          position: 'relative',
        }}
      >
        {story()}
      </div>
  ))
  .add('individual', () => {
    const data = {
      fName: 'Rohit',
      lName: 'Ravikoti',
      jobs: ['Model', 'Actor'],
      location: 'Irvine, CA 92612',
      socialProfiles: {
        twitter: 'envato',
        facebook: 'envato',
      },
      ageMin: 20,
      ageMax: 24,
      gender: 'Male',
      ethnicities: ['Caucasian', 'Asian'],
      heightCm: 180,
      weightKg: 65,
      bust: 34,
      waist: 25,
      hips: 35,
    };
    const story = (
      <ProfileBasicStats
        data={data}
      />
    );
    return story;
  })
  .add('on top of another component', () => {
    const data = {
      fName: 'Rohit',
      lName: 'Ravikoti',
      jobs: ['Model', 'Actor'],
      location: 'Irvine, CA 92612',
      socialProfiles: {
        twitter: 'envato',
        facebook: 'envato',
      },
      ageMin: 20,
      ageMax: 24,
      gender: 'Male',
      ethnicities: ['Caucasian', 'Asian'],
      heightCm: 180,
      weightKg: 65,
      bust: 34,
      waist: 25,
      hips: 35,
    };
    const story = (
      <div>
        <ProfileBasicStats
          data={data}
        />
        <div
          style={{
            height: '50px',
            backgroundColor: 'gray',
            color: 'white',
            textAlign: 'center',
            padding: '10%',
          }}
        >
          This is another component
        </div>
      </div>
    );
    return story;
  });
