export const getUsersPage = (state) => {
    return state.usersPage.users.filter(u => true);
}

/*export const getTempSavedUsers = (state) => {
    return state.usersPage.users.filter(u => true // that are in tempsavedArray);
}*/

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}

export const countSomethingDifficult = (state) => {
    debugger;
    //for... math... big arrays
    let count = 26;
    return count;
}

