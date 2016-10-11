/**
 * Created by nsnik on 10/10/2016.
 */
import React from 'react';
import ProfileMorePhotosItem from './profile_more_photos_item';

const ProfileMorePhotosStyles = {
    border: '1px solid #eee',
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    padding: '3px 10px',
    height: '96px',
    width: '96px',
};
class ProfileMorePhotos extends React.Component {
    constructor(props) {
        super(props) ;
    }

    componentDidMount()  {
        //console.log(Array.isArray(this.props.children)); // => false

        // warning: yields 5 for length of the string 'hello', not 1 for the
        // length of the non-existent array wrapper!
        console.log('componentDidMount');
        debugger;
        console.log('this.props.children ' + React.Children.toArray(this.props.children));
    }

    getChildren(){
        return React.Children.toArray(this.props.children);
    }

    render() {
        console.log('render this.props.children ' + React.Children.toArray(this.props.children));
        return (
            <div>
                {
                    this.props.data.map((item, index) => (
                        <ProfileMorePhotosItem data = {item}  style={{ ...ProfileMorePhotosStyles, ...this.props.style }}   />
                    ))
                }
            </div>
        )
    }
}

ProfileMorePhotos.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    style: React.PropTypes.object,
};

export default ProfileMorePhotos;
