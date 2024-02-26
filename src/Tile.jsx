export function Tile({
  content: Content,
  flip,
  state,
  className,
  backClass,
  frontClass,
  matchedClass,
}) {
  switch (state) {
    case "start":
      return <Back className={`${className} ${backClass}`} flip={flip} />;
    case "flipped":
      return (
        <Front className={`${className} ${frontClass}`}>
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "top",
            }}
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className={`${className} ${matchedClass}`}>
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "top",
            }}
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return <div onClick={flip} className={className}></div>;
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
