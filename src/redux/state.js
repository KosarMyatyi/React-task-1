let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 22 },
                { id: 2, message: "It's my first post", likesCount: 47 },
                { id: 3, message: "blabla", likesCount: 100 },
                { id: 4, message: "Amazing", likesCount: 15993 }
            ],
            newPostText: 'it-kamasutra.com'
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
            newMessageText: 'Hay'
        },
        sideBarPage: {
            friends: [
                { id: 1, name: 'Marya' },
                { id: 2, name: 'Viktorya' },
                { id: 3, name: 'Lyudmila' },
            ]

        },
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        if (action.type === 'ADD-POST') {

            if (!this._state.profilePage.newPostText.length) {
                return;
            }

            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        };

        if (action.type === 'ADD-MESSAGE') {

            if (!this._state.dialogsPage.newMessageText.length) {
                return;
            }

            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText,
            };

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        };
    },

}


export default store;
window.store = store;
