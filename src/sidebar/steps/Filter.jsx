import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Search } from '../Search';
import { Button } from '@scripty/react-buttons';

const Container = styled.div`
    position: relative;
    width: 305px;
    padding-top: 10px;
    height: calc(100vh - 150px);
    overflow-y: scroll;
    top: 0px;
    bottom: 0;

    .image-container {
        float: left;
        margin: 15px;
        cursor: pointer;

        img {
            height: 126px;
        }

        .description {
            font-size: 12px;
            text-align: center;
        }
    }
`;

const NavbarTop = styled.div`
    padding: 10px 15px;
    line-height: 20px;
    position: relative;
    top: 0;
    width: 275px;
    height: 25px;
    background-color: #f5f5f5;
    z-index: 5000;
`;

const NavbarBottom = styled.div`
    padding: 15px 15px;
    position: absolute;
    bottom: 0;
    width: 275px;
    height: 25px;
    background-color: #f5f5f5;
`;



export const Filter = (props) => {

    const { setStep } = props;

    const onButtonClick = () => {
        setStep('pictures')
    };

    return (
        <Fragment>
            <NavbarTop>
                Filter Optionen
            </NavbarTop>

            <Search />

            <Container>
                <div>Kategorie</div>
                <input type={'checkbox'} />
                <label>Alle</label>
            </Container>

            <NavbarBottom>
                <Button onClick={onButtonClick} color={'#000'} style={{width:'100%'}}>Filter Anwenden</Button>
            </NavbarBottom>
        </Fragment>
    )
}
