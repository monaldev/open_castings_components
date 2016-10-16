import Relay from 'react-relay';
import BucketViewComponent from './BucketViewComponent';

// fragment on Buckets
export default Relay.createContainer(BucketViewComponent, {
  fragments: {
    bucket: () => Relay.QL`
      fragment on TalentProfile {
        id
      }`
  }
});
