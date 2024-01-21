import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
  background-color: #ffffff;
  // color: #2b616d;
}

h1,
h2 {
  font-size: large;
}

p {
  font-size: small;
}

button {
   cursor: pointer;
  background-color: #b2dbd5;
  color: #2b616d;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 2px;
 }
`;
