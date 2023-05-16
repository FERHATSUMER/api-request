import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 2V90XiC31En_Bs_dsNV-xa7EizJ1R9iJNizThVFW-CI",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
