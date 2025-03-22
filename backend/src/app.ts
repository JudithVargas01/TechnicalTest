import app from "@server/server";
import dotenv from "dotenv";
import "configMongodb"
dotenv.config();

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});