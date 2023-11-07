import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "32px",
          width: "32px",
          fontSize: "24px",
          fontWeight: "bolder",
          color: "#1F1F1F",
          backgroundColor: "#FFD4D0",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        SP
      </div>
    ),
    {
      ...size,
    }
  );
}
