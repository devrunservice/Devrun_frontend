import React, { useEffect } from "react";
import axios from "axios";

const App =()=> {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/tmi", {
          params: { id: "awds123" },
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhd2RzMTIzIiwiZXhwIjoxNjg4Mzk0ODk4fQ.CvWVjUcHVwc7iYjVDfSgDvS4dBcsIdkBcl0PoUD8512QbmcrhlG1Jdl-cqY_L4tveFKjI76KBWCcc5cq0WKRAg",
          },
        });

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>My React App</h1>
    </div>
  );
}

export default App;
