import CharCard from "../CharCard";
import { Main } from "./style";

import teste from "../../img/RR.png";

function Characters({ characterList, setPage, page, next }) {
  return (
    <Main>
      <img src={teste} alt="" />
      <ul>
        {characterList.map((elem) => (
          <CharCard key={elem.id} elem={elem} />
        ))}
      </ul>
      <div>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page <= 1 ? true : false}
        >
          Previous
        </button>
        <button onClick={() => setPage(page + 1)} disabled={next}>
          Next
        </button>
      </div>
    </Main>
  );
}
export default Characters;
