import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    height: ${props => props.height };
    width: ${props => props.width};
`

const CodeImage = (props) => {
    const { width, height, src } = props;

    return (
        <StyledImage src={src} height={height} width={width}/>
    )
}

export default CodeImage;