import styled from "styled-components";

const Button = styled.button`
	position: fixed;
	bottom: 0;
	right: 14%;
	width: 6%;
	margin: 8px;
`;

const FriendsButton = (props) => {
	const menuSet = (e) => {
		e.preventDefault();
		props.menuSet("Friends");
	};
	return <Button onclick={menuSet}>friends</Button>;
};

export default FriendsButton;
