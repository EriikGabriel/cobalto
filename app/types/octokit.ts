import { Endpoints } from "@octokit/types";

export type GithubUser = Endpoints["GET /user"]["response"]["data"];
export type GithubRepos = Endpoints["GET /user/repos"]["response"]["data"];
export type GithubRepo = GithubRepos[number];
