import React from 'react';
import styled from 'styled-components';
import * as variables from '../variables';

import mobileIllustration from '../Images/illustration-woman-online-mobile.svg';
import mobileIllustrationShadow from '../Images/bg-pattern-mobile.svg';

import desktopIllustration from '../Images/illustration-woman-online-desktop.svg';
import desktopIllustrationShadow from '../Images/bg-pattern-desktop.svg';
import desktopIllustrationBox from '../Images/illustration-box-desktop.svg';

import Content from './Content';

const Main = styled.main`
    background-color: white;
    /* background-color: ${variables.colors.textNeutralLightGray}; */
    position: relative;
    display: flex;
    flex-direction: column;
    height: 33.75rem; // 540px
    width: 21.875rem; // 350px
    border-radius: 1.5625rem; // 25px
    margin-top: 2.5rem; // 40px
    padding-top: 7.5rem; // 120px

    @media only screen and (min-width: ${variables.sizes.large}) {
        height: 31.875rem; // 510px
        width: 57.5rem; // 920px
        margin-top: 0;
        overflow: hidden;
    }
`;

const Illustration = styled.img`
    position: absolute;
    top: -6.718275rem; // -107.5px
    left: 1.5625rem; // 25px

    @media only screen and (min-width: ${variables.sizes.large}) {
        display: none;
    }
`;

const IllustrationShadow = styled(Illustration)`
    top: 0;
    left: 3.125rem; // 50px
`;

const IllustrationDesktop = styled.img`
    display: none;
    position: absolute;
    height: auto;
    width: 30rem; // 480px
    top: 5.3125rem; // 85px
    left: -5rem; // -80px

    @media only screen and (min-width: ${variables.sizes.large}) {
        display: block;
    }
`;

const IllustrationDesktopPattern = styled(IllustrationDesktop)`
    width: 56.25rem; // 900px
    height: auto;
    top: -14.6875rem; // -235px
    left: -31.875rem; // -510px
`;

const IllustrationDesktopBox = styled(IllustrationDesktop)`
    top: 17.8125rem; // 285px
    left: 7.8125rem; // 125px
    width: 12.5rem; // 200px
    position: fixed;
    height: auto;
`;

const Card = () => {
    return (
        <>
            <Main>
                <Illustration src={mobileIllustration} alt='' />
                <IllustrationShadow src={mobileIllustrationShadow} alt='' />
                <IllustrationDesktopPattern src={desktopIllustrationShadow} />
                <IllustrationDesktop src={desktopIllustration} alt='' />
                <Content />
            </Main>
            <IllustrationDesktopBox src={desktopIllustrationBox} alt='' />
        </>
    );
};

export default Card;
