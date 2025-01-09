import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Desc = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 20px;
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ToggleButton = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#007BFF' : '#f0f0f0')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 20px;
  background-color: #ccc;
  margin: 0 10px;
`;