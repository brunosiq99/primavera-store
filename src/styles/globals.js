const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
	/* http://meyerweb.com/eric/tools/css/reset/ 
   		v2.0 | 20110126
   		License: none (public domain)
	*/

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
		margin: 0rem;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
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

	/* Globals */
	button,
	a {
		text-decoration: none;
		opacity: 1;
		transition: .3s;
		&:hover,
		&:focus {
		opacity: .5;
		}
	}
  

  	/* Container */
	.container{
		padding: 0 3rem;
	}
	@media screen and (min-width: 720px){
		.container{
			padding: 0 5rem;
		}
	}
    /* Fonts */
    body{
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
    }

    /*Styles*/
    .regular-section{
		padding-top: 3rem;
		padding-bottom: 3rem;
    }
    .section__titleh2{
        color: #000;
        text-align: center;
        text-transform: uppercase;
        font-size: 1.25rem;
        font-weight: 500;
        margin-bottom: 1rem;
        text-shadow: 1px 1px 2px #000; 
    }
`

export default GlobalStyle;