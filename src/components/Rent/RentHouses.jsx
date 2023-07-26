import { styled } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Search from "../common/Search";
import SelectBox from "../common/SelectBox";
import TopLine from "./TopLine";
import { useReducer } from "react";
import RentCard from "./RentCard";
const Wrapper = styled(Box)({
  minHeight: "750px",
  overflowY: "scroll",
  position: "relative",
});

const FormWrapper = styled("form")({
  minHeight: 100,
  paddingInline: 10,
  display: "flex",
  gap: 1,
  alignItems: "center",
});
const MainWrapper = styled("div")({
  display: "grid",
  gap: 20,
  overflowY: "scroll",
  gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
});
const Flex1 = styled("span")({
  flex: 1,
});
const initialState = {
  search: "",
  location: "",
  date: "",
  roomcount: "",
};

const dateOptions = ["2023", "2022", "2021"];
const LocationsOptions = ["Iran", "Ameriac", "Germany", "Ramsar", "Tonekabon"];
const RoomsOptions = ["1", "2", "3", "4"];

let fakeCards = [
  {
    id: 434342,
    fileId: 1,
    title: "rent house 200 meters",
    location: "ramsar",
    date: 2023,
    roomCount: 3,
    price: 234.24,
    image: "./src/assets/images/bopp.jpg",
  },
  {
    id: 43342,
    fileId: 23,
    title: "Sell with poll ",
    location: "Tehran",
    date: 2021,
    roomCount: 5,
    price: 25000.24,
    image: "./src/assets/images/h5.jpg",
  },
  {
    id: 4542,
    fileId: 23,
    title: "Rent with poll one night ",
    location: "Tonekabon",
    date: 2020,
    roomCount: 2,
    price: 524,
    image: "./src/assets/images/h2.jpg",
  },
  {
    id: 4587942,
    fileId: 2673,
    title: "Rent Luxury house",
    location: "Tehran",
    date: 2023,
    roomCount: 7,
    price: 4500.23,
    image: "./src/assets/images/h4.jpg",
  },
  {
    id: 4147942,
    fileId: 898,
    title: "Buy Luxury home",
    location: "Germany",
    date: 2020,
    roomCount: 2,
    price: 98500.23,
    image: "./src/assets/images/h3.jpg",
  },
  {
    id: 4794002,
    fileId: 80098,
    title: "Buy tiny house",
    location: "Tonekabon",
    date: 2022,
    roomCount: 1,
    price: 900.23,
    image: "./src/assets/images/h1.jpg",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "rent/search":
      return { ...state, search: action.payload };
    case "rent/resetSearch":
      return { ...state, search: "" };
    case "rent/select":
      return { ...state, ...action.payload };

    default:
      throw new Error("Unknown Action !!!");
  }
}

function RentHouses() {
  const [{ search, location, date, roomCount }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [filteredCards, setFilteredList] = useState(fakeCards);

  useEffect(() => {
    if (search === "") {
      setFilteredList(fakeCards);
    } else {
      setFilteredList((cards) =>
        cards.filter((card) => {
          return card.title.includes(search);
        })
      );
    }
  }, [search]);

  return (
    <Wrapper>
      <TopLine />
      <FormWrapper>
        <Search value={search} dispatch={dispatch} />
        <Flex1 />
        <SelectBox
          value={date}
          dispatch={dispatch}
          label="Date"
          options={dateOptions}
          delay={0.2}
        />
        <SelectBox
          value={roomCount}
          dispatch={dispatch}
          options={RoomsOptions}
          label="Room Count"
          delay={0.1}
        />
        <SelectBox
          value={location}
          dispatch={dispatch}
          options={LocationsOptions}
          label="Location"
        />
      </FormWrapper>

      <MainWrapper>
        {filteredCards.map((card, idx) => (
          <RentCard key={card.id} card={card} delay={(idx / 10).toFixed(1)} />
        ))}
      </MainWrapper>
    </Wrapper>
  );
}

export default RentHouses;
