import { memo } from "react";

const style = {
  width: "100%",
  hight: "200%",
  backgroundColor: "Khaki"
};

export const ChildArea = memo((props) => {
  const { open } = props;
  console.log("childAreaがレンダリングされた!!");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  console.log(data);
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
