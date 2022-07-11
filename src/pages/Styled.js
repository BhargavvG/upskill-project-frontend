//Props, css and Pseudo selectors
//hover prop
import styled, {css} from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    background: ${props => props.primary ? "darkmagenta" : "white"};
    color: ${props => props.primary ? "white" : "darkmagenta"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid darkmagenta;
    border-radius: 3px;
    ${
        props => props.hover && css`
            &:hover{
                background: darkmagenta;
                color: white;
                cursor: pointer;
            }
        `
    }
`;

function StyledComp() {
    return <Wrapper>
        <Button hover={true}>Normal</Button>
        <Button primary>Primary</Button>
    </Wrapper>
}

export default StyledComp;
