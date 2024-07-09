import React from "react";
import magnify from "../assets/images/magnify.svg";

type SearchInputProps = {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ searchTerm, handleSearchChange }: SearchInputProps) => {
  return (
    <div className="bg-[#F5F9FE] h-[56px] my-[36px] border rounded-lg p-[16px] flex gap-[16px]">
      <img className="w-[24px] h-[24px]" src={magnify} alt="Magnify" />
      <input
        type="text"
        className="flex-1 !font-neue-montreal text-14 leading-24 text-dark_blue placeholder-dark_blue font-normal outline-none bg-transparent"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchInput;
