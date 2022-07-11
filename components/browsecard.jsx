import { useEffect, useState } from "react";
import Card from "./card.jsx";
import axios from "axios";

function BrowseCard() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api.givitoo.isnan.me/project/")
        .then((response) => {
          setData(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      {data?.map((item) => (
        <Card props={item} key={item.uuid} />
      ))}
    </>
  );
}

export default BrowseCard;
