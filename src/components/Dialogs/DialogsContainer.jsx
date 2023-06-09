import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
