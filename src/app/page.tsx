import { Metadata } from "next";

export const metadata: Metadata = {
  title: "360lity",
};

export default function Home() {
  return (
    <div className="h-svh">
      <iframe
        src="https://evercard.live/Web%20Gallaxy/"
        name="360lity"
        width="100%"
        height="100%"
        className="h-svh"
        allowFullScreen
      ></iframe>
    </div>
  );
}
