import React from 'react';

import SearchPhotoContainer from '../../containers/searchPhoto_container';

const SearchPhoto = (props) => {
    return (
        <div>
            <SearchPhotoContainer {...props}/>
        </div>
    );
};

export default SearchPhoto;