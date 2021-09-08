import React, { Fragment } from 'react';
import styled from 'styled-components';

import QuestionAnswer from './QuestionAnswer';

import * as variables from '../variables';
import { dataSet } from '../dataSet';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: 0.9375rem; // 15px
    overflow-y: auto;
    z-index: 1;

    @media only screen and (min-width: ${variables.sizes.large}) {
        position: absolute;
        right: 4.6875rem; // 75px
        top: 3.125rem; // 50px
        width: 22.5rem; // 360px
        height: 22.5rem; // 360px
    }
`;

const Title = styled.p`
    font-size: 2rem; // 32px
    font-weight: 700;
    margin-bottom: 0.625rem; // 10px
    padding: 0 0.625rem; // 0 10px
    align-self: center;
    font-weight: ${variables.fontWeight.bold};

    @media only screen and (min-width: ${variables.sizes.large}) {
        align-self: flex-start;
    }
`;

const List = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 0.625rem; // 0 10px
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`;

const Border = styled.hr`
    background-color: ${variables.colors.textNeutralLightGray};
    align-self: center;
    opacity: 0.5;
    width: 85%;

    @media only screen and (min-width: ${variables.sizes.large}) {
        width: 100%;
    }
`;

const Content = () => {
    return (
        <Wrapper>
            <Title>FAQ</Title>
            <List>
                {dataSet.map((data) => {
                    return (
                        <Fragment key={data.question}>
                            <QuestionAnswer
                                name={data.question}
                                answer={data.answer}
                            />
                            <Border />
                        </Fragment>
                    );
                })}
            </List>
        </Wrapper>
    );
};

export default Content;
