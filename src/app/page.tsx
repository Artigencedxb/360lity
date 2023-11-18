import { Metadata } from "next";

export const metadata: Metadata = {
  title: "360lity",
};

export default function Home() {
  return (
    <div className="h-screen pb-10 sm:pb-0">
      <iframe
        src="https://360lity.com/projects/web/"
        name="360lity"
        width="100%"
        height="100%"
        // className="h-full"
        allowFullScreen
      ></iframe>
    </div>
  );
}
