import { Octokit } from "octokit";
import { getAccessToken } from "./cookies";

const accessToken = await getAccessToken();

export const octokit = new Octokit({ auth: accessToken?.value });
