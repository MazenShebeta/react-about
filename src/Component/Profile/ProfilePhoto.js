//react component that returns photo of user
import React from 'react';
import image from './ELonMuskProfile.jpg';

function ProfilePhoto() {
    return (
        <div>
            <img src={image} alt="Elon Musk" />
        </div>
    )
}

export default ProfilePhoto;