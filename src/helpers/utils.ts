import { apiEndpoints } from "src/constants/apiEndpoints";

export function isServerSite(): boolean {
  return typeof window === "undefined";
}

export function buildSSRRequestUrl(url?: string) {
  return url?.replace(apiEndpoints.LOCAL_API_PREFIX, "") || "";
}

export function formatString(value: string, variables: any) {
  if (!value) {
    return "";
  }

  return value.replace(/(\{\w+\})/g, (match: any) => {
    const m: string = match.replace(/\{|\}/g, "");
    return variables[m] || "";
  });
}
