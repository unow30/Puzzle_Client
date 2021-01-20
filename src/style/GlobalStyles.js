<<<<<<< HEAD
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
=======
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

>>>>>>> 440f076ee962f2124b3384dd486e339f0334905b
import RobotoBlack from '../Assets/Fonts/Roboto-Black.ttf'
import RobotoBold from '../Assets/Fonts/Roboto-Bold.ttf'
import RobotoLight from '../Assets/Fonts/Roboto-Light.ttf'
import RobotoMedium from '../Assets/Fonts/Roboto-Medium.ttf'
import RobotoRegular from '../Assets/Fonts/Roboto-Regular.ttf'
import RobotoThin from '../Assets/Fonts/Roboto-Thin.ttf'
<<<<<<< HEAD
=======

>>>>>>> 440f076ee962f2124b3384dd486e339f0334905b
const globalStyle = createGlobalStyle`
    ${reset}

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, 
    a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, 
    strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, 
    label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, 
    embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, 
    time, mark, audio, video 
    { margin: 0; padding: 0; border: 0; font-size: 100%; font: 'Roboto',sans-serif; vertical-align: baseline; } 
<<<<<<< HEAD
=======

>>>>>>> 440f076ee962f2124b3384dd486e339f0334905b
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section 
    { display: block; } 
    body { line-height: 1; } 
<<<<<<< HEAD
    ol, ul, li { list-style: none; color: white;} 
=======
    
    ol, ul, li { list-style: none; color: white;} 
    
>>>>>>> 440f076ee962f2124b3384dd486e339f0334905b
    blockquote, q { quotes: none; } 
    blockquote:before, 
    blockquote:after, 
    q:before, q:after { content: ''; content: none; } 
    table { border-collapse: collapse; border-spacing: 0; }
<<<<<<< HEAD
=======

>>>>>>> 440f076ee962f2124b3384dd486e339f0334905b
    @font-face{
        font-family:'Roboto'
        font-style:normal;
        font-weight:100;
        src:url(${RobotoThin})
    }
<<<<<<< HEAD
=======

>>>>>>> 440f076ee962f2124b3384dd486e339f0334905b
    @font-face{
        font-family:'Roboto'
        font-style:normal;
        font-weight:300;
        src:url(${RobotoLight})
    }
<<<<<<< HEAD
=======

>>>>>>> 440f076ee962f2124b3384dd486e339f0334905b
    @font-face{
        font-family:'Roboto'
        font-style:normal;
        font-weight:400;
        src:url(${RobotoRegular})
    }
<<<<<<< HEAD
=======

>>>>>>> 440f076ee962f2124b3384dd486e339f0334905b
    @font-face{
        font-family:'Roboto'
        font-style:normal;
        font-weight:500;
        src:url(${RobotoMedium})
    }
<<<<<<< HEAD
=======

>>>>>>> 440f076ee962f2124b3384dd486e339f0334905b
    @font-face{
        font-family:'Roboto'
        font-style:normal;
        font-weight:700;
        src:url(${RobotoBold})
    }
<<<<<<< HEAD
=======

>>>>>>> 440f076ee962f2124b3384dd486e339f0334905b
    @font-face{
        font-family:'Roboto'
        font-style:normal;
        font-weight:900;
        src:url(${RobotoBlack})
    }
<<<<<<< HEAD
`
export default globalStyle
=======
`;

export default globalStyle;
>>>>>>> 440f076ee962f2124b3384dd486e339f0334905b
