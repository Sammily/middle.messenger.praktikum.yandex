const express = require('express');
const fallback = require('express-history-api-fallback');
const PORT = 3000;

const app = express();
const root = __dirname + "/dist";
app.use(express.static(root));
app.use(fallback("index.html", { root }));

app.listen(PORT, () => {
  console.log(`Мой текст в логе после запуска ${PORT}!`);
});
