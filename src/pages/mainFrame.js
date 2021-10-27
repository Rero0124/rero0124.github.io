import styled from "styled-components";
import CovidApi from "../api/CovidApi";
import WeatherApi from "../api/WeatherApi";

const Nav = styled.div`
	display: flex;
	flex-direction: row;
	align-items: stretch;
	height: 7%;
`;
const ApiValue = styled.div`
	margin: 5px 10px 5px 5px;
	border-radius: 3px;
	flex: 7;
	display: flex;
	flex-direction: row;
	background-color: red;
`;
const LoginForm = styled.form`
	margin: 5px 5px 5px 10px;
	flex: 3;
	background-color: blue;
`;

const MainFrame = () => {
	const element = (
		<Nav>
			<ApiValue>
				<WeatherApi />
				<CovidApi />
			</ApiValue>
			<LoginForm>a</LoginForm>
		</Nav>
	);

	return element;
};

export default MainFrame;
