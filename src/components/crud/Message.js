import styled from 'styled-components';

const Message = ({ msg }) => {
	return (
		<MessageStyles bgColor>
			<h2>{msg}</h2>
		</MessageStyles>
	);
};

export default Message;

const MessageStyles = styled.div`
	padding: 1rem;
	margin-bottom: 1rem;
	text-align: center;
	background-color: ${({ bgColor }) => bgColor && '#dc3545'};
	color: #fff;
	font-weight: bold;
`;
