const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReduser = (state, action) => {

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

export default dialogsReduser;
