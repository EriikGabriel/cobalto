import { Endpoints } from "@octokit/types";

export type GithubUser = Endpoints["GET /user"]["response"]["data"];
