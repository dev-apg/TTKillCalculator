import { useContext, useState } from "react";
import { OneContext, TwoContext, ThreeContext } from "./Contexts"
import Page from './Page';

function Pages() {

  const [activePage, setActivePage] = useState(0);
  const one = useContext(OneContext);
  const two = useContext(TwoContext);
  const three = useContext(ThreeContext);

  return (
    <>
      <button onClick={() => setActivePage(0)}>{one.values.total}</button>
      <button onClick={() => setActivePage(1)}>{two.values.total}</button>
      <button onClick={() => setActivePage(2)}>{three.values.total}</button>
      {activePage === 0 && <Page state={one} />}
      {activePage === 1 && <Page state={two} />}
      {activePage === 2 && <Page state={three} />}
    </>
  )
}

export default Pages
