import { Database } from "fakebase";

const db = new Database("./data");

export const NewsMedia = db.table("newsMedia");
export const News = db.table("news");
export const Reporter = db.table("reporters");
