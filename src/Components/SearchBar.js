import { Form } from 'react-bootstrap';
import { func } from 'prop-types';
import { debounce } from 'lodash';
import React from 'react';

const SearchBar = ({ onSearch }) => {

    const debouncedSearch = debounce(onSearch, 600);//onSearch waits 1500 milis since the user stopped writing to execute the function

    return (
        <Form.Group controlId="formBasicSearch">
            <Form.Control placeholder="Search movies..."
                onChange={(e) => debouncedSearch(e.target.value)} className="mb-1" />
            <Form.Text className="text-muted">
                Search is automatically...
            </Form.Text>
        </Form.Group>

    );
};

SearchBar.propTypes = {
    onSearch: func.isRequired,
};
export default SearchBar;

