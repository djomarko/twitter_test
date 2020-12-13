import React, { useState } from 'react';

export interface SearchPanelProps {
    onSearch: (query: string) => void;
}

export const SearchPanel: React.FC<SearchPanelProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        if (searchQuery) {
            onSearch(searchQuery);
        }

        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Search Name/Location</label>
                <input type="text" onChange={e => setSearchQuery(e.target.value)} />
            </div>
            <input type="submit" value="Submit" />
        </form>
    );
};
