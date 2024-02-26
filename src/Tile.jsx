import { motion } from "framer-motion";

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
  return (
    <motion.div
      onClick={flip}
      className={className}
      animate={{
        rotateY: [90, 45, 0],
        transition: {
          duration: 0.3,
        },
      }}
      whileHover={[
        {
          scale: 0.9,
        },
        {
          transition: {
            delay: 5,
            repeat: Infinity,
          },
          rotate: [0, 10, 0, -10, 0],
        },
      ]}
    ></motion.div>
  );
}

function Front({ className, children }) {
  return (
    <motion.div
      className={className}
      animate={{
        rotateY: [115, 90, 45, 0],
        scale: [0.9, 1],
        transition: {
          duration: 0.3,
        },
        opacity: [0, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
