import styled from "styled-components";

const Button = styled.button`
	position: fixed;
	bottom: 0;
	right: 0;
	width: 6%;
	margin: 8px;
`;

const MailButton = (props) => {
	const menuSet = (e) => {
		e.preventDefault();
		props.menuSet("Mail");
	};
	return <Button onClick={menuSet}>Mail</Button>;
};

export default MailButton;
