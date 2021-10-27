import { useState } from "react";
import styled from "styled-components";
import CovidApi from "../components/api/CovidApi";
import WeatherApi from "../components/api/WeatherApi";
import LoginButton from "../components/login/button/LoginButton";
import JoinInButton from "../components/login/button/JoinInButton";
import LoginForm from "../components/login/form/LoginForm";
import JoinInForm from "../components/login/form/JoinInForm";
import Friends from "../components/menu/views/Friends";
import Message from "../components/menu/views/Message";
import Mail from "../components/menu/views/Mail";
import FriendsButton from "../components/menu/buttons/FriendsButton";
import MailButton from "../components/menu/buttons/MailButton";
import MessageButton from "../components/menu/buttons/MessageButton";

const Page = styled.div`
	height: 100%;
`;

const Nav = styled.div`
	position: fixed;
	z-index: 2;
	top: 0;
	left: 0;
	width: 100%;
	height: 10%;
	background-color: white;
`;
const ApiMenu = styled.div`
	margin: 1%;
	border-radius: 10px;
	display: flex;
	height: 8%;
	width: 79%;
	position: fixed;
	z-index: 3;
	top: 0;
	left: 0;
	flex-direction: row;
	background-color: red;
`;
const Login = styled.form`
	margin: 1%;
	border-radius: 10px;
	display: flex;
	position: fixed;
	z-index: 3;
	height: 8%;
	width: 18%;
	top: 0;
	right: 0;
	background-color: blue;
`;

const Section = styled.div`
	position: relative;
	top: 10%;
	left: 0;
	height: 500%;
`;

const Menu = styled.div`
	position: fixed;
	bottom: 5%;
	right: 0;
	height: 40%;
	width: 21%;
	background-color: yellow;
`;

const Footer = styled.div`
	height: 8%;
`;

const MainFrame = () => {
	const [sectionValue, setSectionValue] = useState();
	const [menu, setMenu] = useState();
	const [menuValue, setMenuValue] = useState();
	const sectionSet = (value) => {
		if (value === "Login") setSectionValue(<LoginForm />);
		else if (value === "JoinIn") setSectionValue(<JoinInForm />);
	};

	const menuSet = (value) => {
		if (value === menuValue) {
			setMenuValue("a");
			document.getElementById("menu").style.display = "none";
		} else {
			document.getElementById("menu").style.display = "block";
		}
		if (value === "Friends") {
			setMenuValue("Friends");
			setMenu(<Friends />);
		}
		if (value === "Message") {
			setMenuValue("Message");
			setMenu(<Message />);
		}
		if (value === "Mail") {
			setMenuValue("Mail");
			setMenu(<Mail />);
		}
	};

	const element = (
		<Page>
			<Nav>
				<ApiMenu>
					<WeatherApi />
					<CovidApi />
				</ApiMenu>
				<Login>
					<LoginButton sectionSet={sectionSet} />
					<JoinInButton sectionSet={sectionSet} />
				</Login>
			</Nav>
			<Section>
				{sectionValue}
				{menuValue}
				<div id="menu">
					<Menu>{menu}</Menu>
				</div>
				<FriendsButton menuSet={menuSet} />
				<MessageButton menuSet={menuSet} />
				<MailButton menuSet={menuSet} />
			</Section>
			<Footer></Footer>
		</Page>
	);

	return element;
};

export default MainFrame;
