let initialState = {
    friends: [
        { id: 1, name: 'Marya' },
        { id: 2, name: 'Viktorya' },
        { id: 3, name: 'Lyudmila' },
    ],
};

const sidebarReducer = (state = initialState, action) => { 
    return state;
}

export default sidebarReducer;