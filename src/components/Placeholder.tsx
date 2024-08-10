import styled from "styled-components";

const Placeholder = ({ text }: { text: string }) => {
  return <PlaceHolderWrapper>{text}</PlaceHolderWrapper>;
};

export default Placeholder;

export const PlaceHolderWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 10px;
  font-size: 24px;
  text-align: center;
  padding: 20px;
`;
