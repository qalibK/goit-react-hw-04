import { Vortex } from "react-loader-spinner";
export default function Loader() {
  return (
    <>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
      <b>Loading...</b>
    </>
  );
}
