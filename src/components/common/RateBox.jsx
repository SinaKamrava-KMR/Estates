import { styled } from "styled-components";
import Star from "./Start";
import { useState } from "react";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Text = styled.p`
  font-size: 25px;
`;
const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
function RateBox() {
  const [rating, setRating] = useState(3);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(r) {
    setRating(r);
  }

  return (
    <Wrapper>
      <Text>{rating}</Text>
      <StarWrapper>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            onRate={() => handleRating(i + 1)}
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            size={30}
          />
        ))}
      </StarWrapper>
    </Wrapper>
  );
}

export default RateBox;
