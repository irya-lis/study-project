import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";

const maxLength50 =  maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
            <Field component={Textarea}
                   validate={[required, maxLength50]}
                   rows="2" cols="50"
                   placeholder="new message"
                   name="newMessageBody"
            />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
