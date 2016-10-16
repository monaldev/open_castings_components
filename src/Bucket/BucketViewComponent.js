/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import faker from 'faker';
import BucketApplicantsComponent from './BucketApplicantsComponent';
import ApplicantionDetailsComponent from '../Application/ApplicantionDetailsComponent';

export default class BucketViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to: faker.name.firstName(),
      or: faker.name.jobTitle(),
      applications: [
        {
          applicant: {
            name: faker.name.firstName(),
          }
        }
      ]
    };
  }
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: '80%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <BucketApplicantsComponent />
        <ApplicantionDetailsComponent />
      </div>
    );
  }
}
