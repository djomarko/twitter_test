import React from 'react';

export interface UserListProps {
    userList: string[];
}

export const UserList: React.FC<UserListProps> = ({ userList }) => {
    return userList.map((userName, i) => <div key={i}>{userName}</div>);
};
