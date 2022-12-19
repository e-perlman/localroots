import styled from "styled-components";

export const FormGroup = styled.div`
    &:not(:last-child) {
    margin-bottom: 12px;
    }
`;

export const Label = styled.label`
    color: hsla(0, 0%, 100%, 0.88);
    display: block;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 8px;
`;


export const Input = styled.input`
    border-radius: 6px;
    border: 1px solid transparent;
    border-color: #dbdbdb;
    -webkit-appearance: none;
    max-width: 100%;
    width: 100%;
    font-size: 1rem;
    line-height: 1.5;
    padding: 4px;
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: indigo;
    display: block;
`;

export const Textarea = styled.textarea`
  border-radius: 6px;
  border: 1px solid transparent;
  border-color: #dbdbdb;
  -webkit-appearance: none;
  max-width: 100%;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  padding: 4px;
  resize: none;
`;