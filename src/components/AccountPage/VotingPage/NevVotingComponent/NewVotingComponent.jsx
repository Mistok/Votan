import React, {useState} from 'react';
import {connect} from "react-redux";
import {Field, reduxForm, FieldArray} from "redux-form";
import { CustomTextArea} from "../../../../common/formControls";
import {requiredField} from "../../../../utils/validators";

import "./newVotingComponent.scss"
import {DAL_CreateNewVoting} from "../../../../api/api";

const NewVotingComponent = (props) => {

    return (
        <>
            <NewVotingReduxForm/>
        </>

    );
}

const renderQuestions = ({fields, meta: {error}, pristine, submitting}) => {

    return(
        <ul className="new_voting_list row justify-content-center">
            <div className="new_voting_container  col-8 col-md-6">

                    <button className="new_voting_add_new" onClick={() => fields.push({})}>
                       <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 10.5C21 16.299 16.299 21 10.5 21C4.70101 21 0 16.299 0 10.5C0 4.70101 4.70101 0 10.5 0C16.299 0 21 4.70101 21 10.5Z" fill="#E3F2FD"/>
                            <path className="new_voting_rotation" d="M14.7645 10.1445C14.9608 10.1445 15.1199 10.3036 15.1199 10.4999V10.4999C15.1199 10.6962 14.9608 10.8553 14.7645 10.8553H11.3553C11.0791 10.8553 10.8553 11.0791 10.8553 11.3553V14.7645C10.8553 14.9608 10.6962 15.1199 10.4999 15.1199V15.1199C10.3036 15.1199 10.1445 14.9608 10.1445 14.7645V11.3553C10.1445 11.0791 9.92064 10.8553 9.6445 10.8553H6.23527C6.03899 10.8553 5.87988 10.6962 5.87988 10.4999V10.4999C5.87988 10.3036 6.03899 10.1445 6.23527 10.1445H9.6445C9.92064 10.1445 10.1445 9.92064 10.1445 9.6445V6.23527C10.1445 6.03899 10.3036 5.87988 10.4999 5.87988V5.87988C10.6962 5.87988 10.8553 6.03899 10.8553 6.23527V9.6445C10.8553 9.92064 11.0791 10.1445 11.3553 10.1445H14.7645Z" fill="black"/>
                        </svg>
                       <span>Додати питання</span>
                    </button>

                {fields.map((description, index) => (
                    <>
                        <li className="new_voting_item align-items-center" key={index}>
                            <label htmlFor="question_description" className="new_voting_input_label">
                                <span>Текст питання {index+1}</span>
                                <Field
                                    className="new_voting_field"
                                    // name={`${description}`+'description'+"_"+index}
                                    name={`${description}`+'description'}
                                    id={index}
                                    component={CustomTextArea}
                                    placeholder='Ваше питання'
                                    validate={[requiredField]}
                                />
                            </label>
                            <button className="new_voting_delete" onClick={() => fields.remove(index)}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.40994 6.99994L12.7099 2.70994C12.8982 2.52164 13.004 2.26624 13.004 1.99994C13.004 1.73364 12.8982 1.47825 12.7099 1.28994C12.5216 1.10164 12.2662 0.99585 11.9999 0.99585C11.7336 0.99585 11.4782 1.10164 11.2899 1.28994L6.99994 5.58994L2.70994 1.28994C2.52164 1.10164 2.26624 0.99585 1.99994 0.99585C1.73364 0.99585 1.47824 1.10164 1.28994 1.28994C1.10164 1.47825 0.995847 1.73364 0.995847 1.99994C0.995847 2.26624 1.10164 2.52164 1.28994 2.70994L5.58994 6.99994L1.28994 11.2899C1.19621 11.3829 1.12182 11.4935 1.07105 11.6154C1.02028 11.7372 0.994141 11.8679 0.994141 11.9999C0.994141 12.132 1.02028 12.2627 1.07105 12.3845C1.12182 12.5064 1.19621 12.617 1.28994 12.7099C1.3829 12.8037 1.4935 12.8781 1.61536 12.9288C1.73722 12.9796 1.86793 13.0057 1.99994 13.0057C2.13195 13.0057 2.26266 12.9796 2.38452 12.9288C2.50638 12.8781 2.61698 12.8037 2.70994 12.7099L6.99994 8.40994L11.2899 12.7099C11.3829 12.8037 11.4935 12.8781 11.6154 12.9288C11.7372 12.9796 11.8679 13.0057 11.9999 13.0057C12.132 13.0057 12.2627 12.9796 12.3845 12.9288C12.5064 12.8781 12.617 12.8037 12.7099 12.7099C12.8037 12.617 12.8781 12.5064 12.9288 12.3845C12.9796 12.2627 13.0057 12.132 13.0057 11.9999C13.0057 11.8679 12.9796 11.7372 12.9288 11.6154C12.8781 11.4935 12.8037 11.3829 12.7099 11.2899L8.40994 6.99994Z" fill="#D2D2D2"/>
                                </svg>
                            </button>
                        </li>
                    </>
                ))}

                <hr/>
                <button className="btn btn-primary new_voting_start_voting" type="submit" disabled={pristine || submitting}>Почати голосування</button>
            </div>
        </ul>
    )
}

const NewVotingForm = (props) => {
    let handleSubmit = props.handleSubmit;
    const [requestStatus, setRequestStatus] = useState(null)
    let addNewVoteHandler = (values) => {
        let questions = values.questions
        debugger
        DAL_CreateNewVoting(questions)
            .then(response => {
                if(response.data.status === 200) {
                    setRequestStatus('Питання успішно додано')
                }
            }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                    setRequestStatus(error.response.data.message)
                } else {
                console.log('Error', error.message);
            }

        });
    };

    return(
        <form
            onSubmit={handleSubmit(addNewVoteHandler)}
            className="auth_form_container"
        >
            {/*{ requestStatus ?  'requestStatus' = requestStatus : null }*/}
            <FieldArray name="questions"  component={renderQuestions}/>
            { requestStatus ?  <p className="new_voting_error">{requestStatus} </p> : null }
        </form>
    )
}
export const NewVotingReduxForm =  reduxForm(
    {form: "newVoting"}
)(NewVotingForm);

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        role: state.auth.role,
        cabinet: state.cabinet,
        newVotingForm: state.newVotingForm
    }
}
export default connect(mapStateToProps, null)(NewVotingComponent);