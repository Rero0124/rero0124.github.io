import styled from "styled-components";

const Layout = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	transform: translate(0, 0);
	width: 50%;
	height: 100%;
	border-left: 1px solid black;
`;

const Button = styled.button`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 80%;
	border-radius: 10px;
	background-color: skyblue;
	vertical-align: middle;
`;

const JoinInButton = () => {
	const element = (
		<Layout>
			<Button>Join In</Button>
		</Layout>
	);

	return element;
};

export default JoinInButton;
