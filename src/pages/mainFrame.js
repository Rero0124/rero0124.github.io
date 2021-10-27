import styled from 'styled-components';


function mainFrame() {
    const Nav = styled.div`
        display: flex;
        flex-direction: row;
    `;
    const ApiValue = styled.div`
        margin: 0 10px 0 5px;
        flex: 7;
        background-color: red;
    `;

    const Login = styled.div`
        margin: 0 5px 0 10px;
        flex: 3;
        background-color: blue; 
    `;

    const element = (
        <Nav>
            <ApiValue />
            <Login />
        </Nav>
    );

    return element;
}

export default mainFrame;