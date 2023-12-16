import { createGlobalStyle } from 'styled-components';

export interface themeProps {
  primary?: string;
  secondary?: string;
  color?: string;
  third?: string;
  appBG?: string;
}

export const darkTheme: themeProps = {
  secondary: '#0C7C59',
  third: '#D64933',
  primary: '#BAC1B8',
  color: '#58A4B0',
  appBG: '#020202',
};

export const lightTheme: themeProps = {
  primary: '#FFECD1',
  secondary: '#FF7D00',
  third: '#15616D',
  color: '#78290F',
  appBG: '#FFEEDB',
};

const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	outline: none;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color: ${(props) => props.theme.appBG};
	color: ${(props) => props.theme.secondary};
	font-family: 'Montserrat', sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export default GlobalStyle;
