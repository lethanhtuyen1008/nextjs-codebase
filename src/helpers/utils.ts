import { formatDistanceToNow, differenceInDays, format } from "date-fns";

export class DateUtil {
  public formatDiffFromNow(value: string): string {
    if (!value) {
      return "";
    }

    const date = new Date(value);

    if (differenceInDays(new Date(), date) > 1) {
      return format(date, "DD/MM/YYYY");
    }

    return formatDistanceToNow(date);
  }

  public formatUTCToLocalDate(
    value: string,
    formatString: string = "DD/MM/YYYY"
  ): string {
    const date = new Date(value);

    return format(date, formatString);
  }
}

export const dateUtil = new DateUtil();
