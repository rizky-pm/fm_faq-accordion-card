import React, { useState } from 'react';
import styled from 'styled-components';
import * as variables from '../variables';
import icon from '../Images/icon-arrow-down.svg';

import './QuestionAnswer.css';

const Container = styled.div`
    position: relative;
    padding: 1.25rem 1.5625rem; // 20px 25px

    @media only screen and (min-width: ${variables.sizes.large}) {
        padding: 1.25rem 0;
    }
`;

const Question = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${variables.colors.textPrimaryDark};
    font-weight: ${(props) => (props.showAnswer ? '700' : '400')};
    font-size: 0.875rem; // 14px
    transition: all ease 0.1s;

    :hover {
        color: ${variables.colors.textPrimarySoftRed};
        cursor: pointer;
    }
`;

const Answer = styled(Question)`
    opacity: 0;
    font-weight: 400;
    width: 90%;
    transition: all ease 0.5s;

    :hover {
        color: ${variables.colors.textPrimaryDark};
        cursor: default;
    }
`;

const Icon = styled.img`
    height: auto;
    transform: ${(props) => (props.showAnswer ? 'rotate(180deg)' : '')};
    width: 0.625rem; // 10px
    transition: all ease 0.5s;
`;

const QuestionAnswer = (props) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
        console.log(showAnswer);
    };

    return (
        <Container>
            <Question onClick={toggleAnswer} showAnswer={showAnswer}>
                {props.name} <Icon showAnswer={showAnswer} src={icon} alt='' />
            </Question>
            <Answer
                className={`${showAnswer ? 'active' : ''}`}
                showAnswer={showAnswer}
            >
                {showAnswer ? props.answer : ''}
            </Answer>
        </Container>
    );
};

export default QuestionAnswer;
