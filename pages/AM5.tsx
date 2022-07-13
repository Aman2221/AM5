import dynamic from "next/dynamic";
const AM5 = dynamic(
  () => import("../components/AM5"),
  {
    ssr: false,
  }
);

const ToRun = () => {
  return <AM5 />;
};
export default ToRun;