import dynamic from "next/dynamic";
const AM4 = dynamic(
  () => import("../components/AM4"),
  {
    ssr: false,
  }
);

const ToRun = () => {
  return <AM4 />;
};
export default ToRun;