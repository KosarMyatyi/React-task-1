let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 22 },
            { id: 2, message: "It's my first post", likesCount: 47 },
            { id: 3, message: "blabla", likesCount: 100 },
            { id: 4, message: "Amazing", likesCount: 15993 }
        ],
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Marya' },
            { id: 2, name: 'Viktorya' },
            { id: 3, name: 'Lyudmila' },
            { id: 4, name: 'D.Dima' },
            { id: 5, name: 'Dimas' },
            { id: 6, name: 'Sasha' },
            { id: 7, name: 'Roma' }
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your day?' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' },
            { id: 6, message: 'Yo' },
            { id: 7, message: 'Yo' }
        ],
    },
    sideBarPage: {
        friends: [
            { id: 1, name: 'Marya' },
            { id: 2, name: 'Viktorya' },
            { id: 3, name: 'Lyudmila' },
        ]

    },
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    // rerenderEntireTree(state);
}

export default state;