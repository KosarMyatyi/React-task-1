import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


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
            newMessageBody: ''
        },
        sidebar: {
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },

}

export default store;
window.store = store;
