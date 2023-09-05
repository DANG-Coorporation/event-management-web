import { RxCross1 } from "react-icons/rx";

export default function Tag(props) {
  const { tag, onRemove } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        padding: "5px",
        paddingLeft: "10px",
        paddingRight: "10px",
        borderRadius: "5px",
        backgroundColor: "#f5f5f5",
      }}
    >
      {tag}
      <RxCross1
        size={"16px"}
        style={{
          marginLeft: "5px",
          cursor: "pointer",
        }}
        onClick={onRemove}
      />
    </div>
  );
}
