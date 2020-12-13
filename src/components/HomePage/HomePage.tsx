import React, { useEffect, useState } from 'react';
import { useSelector, connect } from 'react-redux';
import { searchUsers } from '../../actions/actions';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import { UserList } from '../UserList/UserList';

const HomePage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const users: string[] = useSelector(state => state.users);

    useEffect(() => {
        searchUsers(searchQuery);
    }, [searchQuery]);

    return (
        <>
            <SearchPanel onSearch={val => setSearchQuery(val)}></SearchPanel>
            <div>
                <UserList userList={users}></UserList>
            </div>
        </>
    );
};
