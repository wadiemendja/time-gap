function calculateTimeGap(date) {
    const timeDef = new Date().getTime() - new Date(date).getTime();
    const minutesGap = parseInt(timeDef / (1000 * 60));
    const hoursGap = parseInt(timeDef / (1000 * 60 * 60));
    const daysGap = parseInt(timeDef / (1000 * 60 * 60 * 24));
    const monthsGap = parseInt(timeDef / (1000 * 60 * 60 * 24 * 30));
    const yearsGap = parseInt(timeDef / (1000 * 60 * 60 * 24 * 30 * 12));
    if (yearsGap > 0) {
        if (yearsGap == 1) return "1 year ago";
        else return yearsGap + " years ago";
    } else if (monthsGap == 1) return "1 month ago";
    else if (monthsGap > 1) return monthsGap + " months ago";
    else if (monthsGap == 0) {
        if (daysGap == 0) {
            if (hoursGap == 0) {
                if (minutesGap == 0) return "Just now";
                else if (minutesGap == 1) return "1 minute ago"
                else return minutesGap + " minutes ago";
            } else if (hoursGap == 1) return "1 hour ago";
            else return hoursGap + " hours ago";
        } else if (daysGap < 7) {
            if (daysGap == 1) return "1 day ago";
            else return daysGap + " days ago";
        } else if (daysGap >= 7 && daysGap < 14) return "1 week ago";
        else if (daysGap >= 14 && daysGap < 21) return "2 weeks ago";
        else return "3 weeks ago";
    }
}
