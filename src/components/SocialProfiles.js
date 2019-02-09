import React from 'react';
import PROFILES from '../data/socialProfiles';


const SocialProfile = (props) => {
    const {image, link} = props.socialProfile;
    return (
        <span>
            <a href={link} >
                <img src={image} alt='socialProfile' style={{ width:35, height:35, margin:10}}/>
            </a>
        </span>
    )
}

const SocialProfiles = () => (
    <div>
        <h3>Connect With Me</h3> 
        <div>
            {
                PROFILES.map(PROFILE => {return (<SocialProfile key={PROFILE.id} socialProfile={PROFILE} />)})
            }
        </div>
    </div>
)

export default SocialProfiles;