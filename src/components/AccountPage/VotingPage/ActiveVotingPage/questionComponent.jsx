import React, {useEffect, useState} from 'react';

import {connect} from "react-redux";
import {getActiveVotingThunkCreator} from "../../../../redux/activeVotingsReducer";
import "./questionComponent.scss"
import {Field, reduxForm} from "redux-form";
import {DAL_Vote} from "../../../../api/api";

const ClientVotingForm = (props) => {
    let handleSubmit = props.handleSubmit;
    return(
        <form name={`clientVotingForm${props.id}`} onSubmit={handleSubmit}>
            <div>
                <Field type="radio" component="input" value={'YES'} checked name="answer"/>
                <label htmlFor="yes" className="client_voting_label">  Так</label>
            </div>
            <div>
                <Field type="radio" component="input" value={'NO'} name="answer"/>
                <label htmlFor="no" className="client_voting_label">  Ні</label>
            </div>
            <div>
                <Field id="" type="radio" component="input" value={'ABSTEIN'} name="answer"/>
                <label htmlFor="abstein" className="client_voting_label">  Утриматися</label>
            </div>

            <div className="btn btn-primary w-100 mt-2">Голосувати</div>
        </form>
    )
}
export const ClientVotingFormRedux = reduxForm({form: `clientVotingForm`})(ClientVotingForm)

const ActiveVoting = (props) => {
    const [isAuth, setIsAuth] = useState(false)
    const [voteError, setVoteError] = useState(false)
    let isSupport;

    useEffect(()=>{
        props.getActivePools();
    }, [])

    const votingHandler = (values) => {
        DAL_Vote(values)
            .then(response => {
                console.log(response)
                alert(`Ваш голос зараховано: ${response.data.message}`)
            }).catch((error) => {
            // Error
            if (error) {
                alert(error.message)
                console.log(error.response)
                setVoteError(error.response.data.message)

            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }

        });
    };

    const votingAbsoluteResult = (question) => {
        let support = question.answersPercentageByCountMethod.YES;
        let ageinst = question.answersPercentageByCountMethod.NO;
        support > ageinst ? isSupport = true : isSupport = false
        return support > ageinst ? 'за' : 'проти'
    }
    const votingNumberResult = (question) => {
        let support = question.answersPercentageByCountMethod.YES.BY_APARTMENTS;
        let ageinst = question.answersPercentageByCountMethod.NO.BY_APARTMENTS;
        let abstein = question.answersPercentageByCountMethod.ABSTAIN.BY_APARTMENTS;
        let summ = support+abstein+abstein;
         return  isSupport ? summ/100*support : summ/100*ageinst
    }
    const votingSquareResult = (question) => {
        let support = question.answersPercentageByCountMethod.YES.BY_SQUARE;
        let ageinst = question.answersPercentageByCountMethod.NO.BY_SQUARE;
        let abstein = question.answersPercentageByCountMethod.ABSTAIN.BY_SQUARE;
        let summ = support+abstein+abstein;
         return  isSupport ? summ/100*support : summ/100*ageinst
    }

    return (
        <>
            <div className="container voting_container">
                {props.activePolls.map( (voting) => {
                    return (
                        <>
                            <div className="voting_container">

                                <div>{voting.questions.map((question) => {
                                    return(

                                        <div className="question_container" key={question.id}>

                                            <div className="question_description">
                                                {question.questionDto.description}
                                            </div>
                                            <div className="question_result">
                                                Статус голосування: {voting.active? 'активне' : 'завершене'}
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    Голосування від: {voting.startDate}
                                                </div>
                                                <div className="col-4">
                                                    Прийняло участь: {voting.numberOfApartmentsVoted}
                                                </div>
                                            </div>
                                            <hr className="auth_hr"/>
                                            <div className={`row`}>
                                                <div className="col-12 col-md-6">
                                                    Проголосували: {votingAbsoluteResult(question)}
                                                </div>
                                            </div>

                                            <div className={`row`}>
                                                <div className="col-12 col-md-6">
                                                    Поквартирно: - {votingNumberResult(question)}%
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    Площею: - {votingNumberResult(question)}м<sup>2</sup>
                                                </div>
                                            </div>
                                            <hr className="auth_hr"/>
                                            <div>
                                                <h1 className="client_voting_header">Ваша відповідь:</h1>
                                                <ClientVotingFormRedux id={question.id}/>
                                                {voteError? voteError : ''}
                                                {/*{*/}
                                                {/*    ((id) => {*/}
                                                {/*        const ClientVotingForm = (props) => {*/}
                                                {/*            let handleSubmit = props.handleSubmit;*/}
                                                {/*            return(*/}
                                                {/*            <form name={`clientVotingForm${props.id}`} onSubmit={handleSubmit}>*/}
                                                {/*            <div>*/}
                                                {/*            <Field type="radio" component="input" value={'YES'} checked name="answer"/>*/}
                                                {/*            <label htmlFor="yes" className="client_voting_label">  Так</label>*/}
                                                {/*            </div>*/}
                                                {/*            <div>*/}
                                                {/*            <Field type="radio" component="input" value={'NO'} name="answer"/>*/}
                                                {/*            <label htmlFor="no" className="client_voting_label">  Ні</label>*/}
                                                {/*            </div>*/}
                                                {/*            <div>*/}
                                                {/*            <Field type="radio" component="input" value={'ABSTEIN'} name="answer"/>*/}
                                                {/*            <label htmlFor="abstein" className="client_voting_label">  Утриматися</label>*/}
                                                {/*            </div>*/}

                                                {/*            <div className="btn btn-primary w-100 mt-2">Голосувати</div>*/}
                                                {/*            </form>*/}
                                                {/*            )*/}
                                                {/*        }*/}
                                                {/*        export const ClientVotingFormRedux = reduxForm({form: `clientVotingForm${id}`})(ClientVotingForm)*/}
                                                {/*    })()*/}
                                                {/*}*/}
                                            </div>
                                        </div>
                                    )
                                })}</div>
                            </div>
                        </>

                    )
                })}
            </div>

        </>
    );
}

let mapStateToProps = (store) => {
    return {
        activePolls: store.activePolls.polls,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getActivePools: () => getActiveVotingThunkCreator(dispatch),
    }
};

const ActiveVotingPage = connect(mapStateToProps, mapDispatchToProps())(ActiveVoting)

export default ActiveVotingPage ;