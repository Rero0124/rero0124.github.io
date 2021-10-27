import styled from "styled-components";
import CovidApi from "../api/CovidApi";
import WeatherApi from "../api/WeatherApi";

const Nav = styled.div`
	display: flex;
	flex-direction: row;
	align-items: stretch;
	height: 10%;
`;
const ApiValue = styled.div`
	margin: 7px 10px 7px 5px;
	border-radius: 10px;
	flex: 7;
	display: flex;
	flex-direction: row;
	background-color: red;
`;
const LoginForm = styled.form`
	margin: 7px 5px 7px 10px;
	border-radius: 10px;
	flex: 3;
	background-color: blue;
`;

const MainFrame = () => {
	const element = (
		<Nav>
			<ApiValue>
				<WeatherApi />
				<div>
					|<br />
					|<br />
					|<br />
				</div>
				<CovidApi />
			</ApiValue>
			<LoginForm></LoginForm>
		</Nav>
	);

	return element;
};

export default MainFrame;
