import styled from "styled-components";
import CovidApi from "../api/CovidApi";
import WeatherApi from "../api/WeatherApi";

const Page = styled.div`
	height: 100%;
`;

const Nav = styled.div`
	height: 8%;
`;
const ApiMenu = styled.div`
	margin: 1%;
	border-radius: 10px;
	display: flex;
	height: 8%;
	width: 69%;
	position: fixed;
	top: 0;
	left: 0;
	flex-direction: row;
	background-color: red;
`;
const LoginForm = styled.form`
	margin: 1%;
	border-radius: 10px;
	display: flex;
	position: fixed;
	height: 8%;
	width: 28%;
	top: 0;
	right: 0;
	background-color: blue;
`;

const Section = styled.div`
	height: 500%;
`;

const MainFrame = () => {
	const element = (
		<Page>
			<Nav>
				<ApiMenu>
					<WeatherApi />
					<div>
						|<br />
						|<br />
						|<br />
					</div>
					<CovidApi />
				</ApiMenu>
				<LoginForm></LoginForm>
			</Nav>
			<Section></Section>
		</Page>
	);

	return element;
};

export default MainFrame;
