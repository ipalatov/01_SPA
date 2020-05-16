import React from 'react';
import Friends from './friends';
import StoreContext from '../../storeContext';


const FriendsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                return (
                    <Friends
                        friends={store.getState().friendsBar.friends}
                    />
                )
            }
            }
        </StoreContext.Consumer>
    )
}

export default FriendsContainer;