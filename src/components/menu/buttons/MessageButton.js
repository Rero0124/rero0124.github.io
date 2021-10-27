import styled from "styled-components";

const Button = styled.button`
	position: fixed;
	bottom: 0;
	right: 7%;
	width: 6%;
	margin: 8px;
`;

const MessageButton = (props) => {
	const menuSet = (e) => {
		e.preventDefault();
		props.menuSet("Message");
	};
	return <Button onClick={menuSet}>message</Button>;
};

export default MessageButton;
