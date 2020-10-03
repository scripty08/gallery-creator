import React, {useState} from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
    height: 25px;
    position: relative;
    background: #fff;
`;

const Input = styled.input`
    height: 15px;
    width: 15px;
    display: inline-block;
    border: 1px solid #eaeaea;
`;

const Label = styled.label`
    width: 30px;
    font-size: 16px;
    padding: 0px 5px;
    line-height: 15px;
`;

export const Checkbox = (props) => {
    const [checked, setChecked] = useState(checked);
    const { onChange, label = '', id='id'} = props;

    const onCheckboxChange = () => {
        setChecked(!checked);
        onChange({checked: !checked, id});
    };

    return (
        <CheckboxContainer>
            <Input type={'checkbox'} onChange={onCheckboxChange} id={id} checked={checked}/>
            <Label htmlFor={id}>{label}</Label>
        </CheckboxContainer>
    );
};
