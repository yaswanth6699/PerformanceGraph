import { useState } from "react";
import { FormWrapper } from "../styles/Wrapper";

const TypeHead = ({
  query,
  toggleQuery,
}: {
  query: string;
  toggleQuery: (text: string) => void;
}) => {
  const [text, toggleText] = useState<string>(query);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toggleQuery(text);
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        name="query"
        onChange={(e) => toggleText(e.target.value)}
        placeholder="Search for valid Ticker"
      />
      <button type="submit">Search</button>
    </FormWrapper>
  );
};

export default TypeHead;
