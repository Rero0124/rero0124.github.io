import styled from "styled-components";

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

const MainFrame = () => {
	const element = (
		<Nav>
			<ApiValue />
			<h2>Plz</h2>
			<Login />
		</Nav>
	);

	return element;
};

export default MainFrame;
