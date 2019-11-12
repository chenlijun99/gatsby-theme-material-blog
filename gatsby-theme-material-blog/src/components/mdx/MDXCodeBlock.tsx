import React, { useContext } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import { LayoutContext } from "../Layout";
import siteTheme from "../../theme";

const MDXCodeBlock: React.FC<{ children: string; className: string }> = ({
  children,
  className,
}) => {
  const layoutContext = useContext(LayoutContext);
  const language = className.replace(/language-/, "") as Language;
  const darkMode = layoutContext.darkMode ? "dark" : "light";
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={siteTheme[darkMode].codeBlockTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default MDXCodeBlock;
