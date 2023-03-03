import React from "react";

export const Search = () => {
    return (
        <div className='search'>
            <div className='searchForm'>
                <input
                    type='text'
                    placeholder='find a user'
                />
            </div>
            <div className='userChat'>
                <img
                    src='https://cdn.pixabay.com/photo/2021/10/01/18/53/corgi-6673343_960_720.jpg'
                    alt=''
                />
                <div className='userChatInfo'>
                    <span>Joe</span>
                </div>
            </div>
        </div>
    );
};
export default Search;
