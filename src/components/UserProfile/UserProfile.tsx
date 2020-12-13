import React from 'react';
import { UserProfileData } from '../../models/UserProfileData';

export interface UserProfileProps extends UserProfileData {}

/**
 * Primary UI component for user interaction
 */
export const UserProfile: React.FC<UserProfileProps> = ({ name, profileImage, twitterHandle, followers, tweets }) => {
    return (
        <div>
            <div>
                <div>
                    <h2>{name}</h2>
                </div>
                <div>
                    <label>Twitter handle</label>
                    <span>
                        <a href={twitterHandle} target="_blank">
                            {twitterHandle}
                        </a>
                    </span>
                </div>
                <div>
                    <label>followers</label>
                    <span>{followers}</span>
                </div>
            </div>
            <div>
                <img src={profileImage} />
            </div>
        </div>
    );
};
