import path from "path";
import * as modules from "./modules";
import { loadGQLFiles, mergeResolvers } from "./libs";

export default {
  typeDefs: loadGQLFiles(path.resolve(__dirname, "../**/*.graphql")),
  resolvers: mergeResolvers(modules),
};
