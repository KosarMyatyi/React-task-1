const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageBody,
            };

            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText;
            return state;
        case !state.newMessageBody.length:
            return;
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({ type: 'SEND-MESSAGE' });
export const updateNewMessageBodyCreator = (text) =>
    ({ type: 'UPDATE-NEW-MESSAGE-BODY', newText: text });

export default dialogsReducer;
