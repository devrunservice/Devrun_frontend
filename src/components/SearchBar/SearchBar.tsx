import React, { useRef } from "react";
import * as St from "./styles";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const value = inputRef.current?.value;
    console.log(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <St.SearchBar>
      <St.SearchInput
        type="text"
        ref={inputRef}
        onKeyPress={onKeyPress}
        placeholder="작성한 질문을 입력해주세요"
      />
      <St.SearchBtn type="submit" onClick={onClick}>
        검색
      </St.SearchBtn>
    </St.SearchBar>
  );
};

export default SearchBar;
