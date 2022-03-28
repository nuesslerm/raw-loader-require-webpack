import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import github from "prism-react-renderer/themes/github";

export interface IPreProps {
  codeString: string;
  language: Language;
}

export const Pre = (props: IPreProps) => {
  const { codeString, language } = props;

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={github}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: "2rem",
            position: "relative",
            overflowX: "scroll"
          }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} style={style}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
