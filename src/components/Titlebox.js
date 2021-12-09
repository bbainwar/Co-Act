import Login from "./Login";

const Titlebox = (props) => {
  const class_name = props.class_name;

  return (
    <div className={class_name}>
      <h1>Co-ACT</h1>
      {(() => {
        if (class_name === "getstarted_titlebox") {
          return <Login />;
        }
        return null;
      })()}
    </div>
  );
};

export default Titlebox;
