const app = require("./app");

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Api rodando em HTTP://localhost:${PORT}`)
})