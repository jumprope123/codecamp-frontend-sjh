import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    void (async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(result.data.message);
      setDogUrl(result.data.message);
    })();
  }, []);

  return (
    <div>
      <img src={dogUrl} />
    </div>
  );
}
