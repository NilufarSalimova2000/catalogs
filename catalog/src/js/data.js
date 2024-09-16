const url = "http://localhost:3600";

export const getBanner = async () => {
    try {
        const res = await fetch(`${url}/banners`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error.message;
    }
};

export const getCatalog = async () => {
    try {
        const res = await fetch(`${url}/catalog`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error.message;
    }
};

export const getTabContent = async (name) => {
    try {
      const res = await fetch(`${url}/${name}`);
      const data = await res.json();
  
      return data;
    } catch (error) {
      return error.message;
    }
  };