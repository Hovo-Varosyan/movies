import React from "react";
import ElementMovies from "../components/movies/element";
import { v4 as uuidv4 } from "uuid";
import storeData from "../store/store";
import { observer } from "mobx-react-lite";
import Filter from "../components/filter";

const Table = observer(() => {
  const data = storeData.data;

  return (
    <>
      <section className="main">
        <Filter />
        {data.map((e, i) => (
          <ElementMovies
            key={uuidv4()}
            data={e}
            
          />
        ))}
      </section>
    </>
  );
});

export default Table;
