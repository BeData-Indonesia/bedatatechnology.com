// import React from 'react'

// import { useEffect } from "react";
// import dracula from "prism-react-renderer/themes/dracula";
// import Highlight, { defaultProps } from "prism-react-renderer";
// import { Pre, Line, LineNo, LineContent } from "./blockCode.styled";

// export default function BlockCode({ code }) {
//   let codeSplit = code.split("$;");
//   let progLang = codeSplit[0];
//   let codeBlock = codeSplit[1];
//   useEffect(() => {}, [progLang]);
//   return (
//     <Highlight {...defaultProps} theme={dracula} code={codeBlock} language={progLang}>
//       {({ className, style, tokens, getLineProps, getTokenProps }) => (
//         <Pre tes="" style={style}>
//           <div className="relative -top-3 border p-1 right-4 rounded inline">{progLang}</div>
//           {tokens.map((line, i) => (
//             <Line key={i} {...getLineProps({ line, key: i })}>
//               <LineNo>{i + 1}</LineNo>
//               <LineContent>
//                 {line.map((token, key) => (
//                   <span key={key} {...getTokenProps({ token, key })} />
//                 ))}
//               </LineContent>
//             </Line>
//           ))}
//         </Pre>
//       )}
//     </Highlight>
//   );
// }

import * as React from "react";

export default function BlockCode() {
    return <div>BlockCode</div>;
}
