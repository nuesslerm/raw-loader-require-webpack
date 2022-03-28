import * as React from "react";
import { useState } from "react";
import { Pre } from "./Pre";

export interface ISnippetTogglerProps {
  snippetLabel: string;
  fileLabels: Array<string>;
  typeScriptCode: string;
  javaScriptCode: string;
}

export function SnippetToggler(props: ISnippetTogglerProps) {
  const { snippetLabel, fileLabels, typeScriptCode, javaScriptCode } = props;

  const [showJavaScript, setShowJavaScript] = useState<boolean>(false);
  const activeModeText = showJavaScript ? "JavaScript" : "TypeScript";
  const className = activeModeText.toLowerCase();

  const typeScriptBlock = (
    <>
      <code className={className}>{fileLabels[0]}</code>
      <Pre codeString={typeScriptCode} language="typescript" />
    </>
  );

  const javaScriptBlock = (
    <>
      <code className={className}>{fileLabels[1]}</code>
      <Pre codeString={javaScriptCode} language="javascript" />
    </>
  );

  return (
    <>
      <h3 className={className}>{snippetLabel}</h3>
      <div>
        <label className={`switch ${className}`}>
          <input
            type="checkbox"
            onChange={() => setShowJavaScript(!showJavaScript)}
            checked={showJavaScript}
          />
          <span className="slider round" />
          <span className="switch-text snippet">
            {activeModeText} Mode Active
          </span>
        </label>
      </div>
      {showJavaScript ? javaScriptBlock : typeScriptBlock}
    </>
  );
}
