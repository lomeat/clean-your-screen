import React from "react";
import styled from "styled-components";

export function App() {
  const [isWhite, setIsWhite] = React.useState<boolean>(false);

  function toggleColor() {
    setIsWhite((state) => !state);
  }

  return <ColorBlock isWhite={isWhite} onClick={toggleColor} />;
}

const ColorBlock = styled.div<{ theme: Theme; isWhite: boolean }>`
  width: 100vw;
  height: 100vh;

  background: ${({ theme, isWhite }) => (isWhite ? theme.white : theme.black)};
  transition: ease-in-out 0.2s background;
`;
