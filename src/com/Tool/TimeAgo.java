package Tool;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class TimeAgo {
public static final List<Long> times = Arrays.asList(
        TimeUnit.DAYS.toMillis(365),
        TimeUnit.DAYS.toMillis(30),
        TimeUnit.DAYS.toMillis(1),
        TimeUnit.HOURS.toMillis(1),
        TimeUnit.MINUTES.toMillis(1),
        TimeUnit.SECONDS.toMillis(1) );
public static final List<String> timesString = Arrays.asList("year","month","day","hour","minute","second");

public static void testtime() {
    try {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        Date past = format.parse("2022-10-20 16:40:14.143");
        Date now = new Date();

        int n = (int) TimeUnit.MILLISECONDS.toMinutes(now.getTime() - past.getTime());
        System.out.println(n);
        System.out.println(TimeUnit.MILLISECONDS.toMillis(now.getTime() - past.getTime()) + " milliseconds ago");
        System.out.println(TimeUnit.MILLISECONDS.toMinutes(now.getTime() - past.getTime()) + " minutes ago");
        System.out.println(TimeUnit.MILLISECONDS.toHours(now.getTime() - past.getTime()) + " hours ago");
        System.out.println(TimeUnit.MILLISECONDS.toDays(now.getTime() - past.getTime()) + " days ago");
    }
    catch (Exception j){
        j.printStackTrace();
    }
}

public static String Ca_TimeAgo(String date) {
	String TimeAgo = "";
    try {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        Date past = format.parse(date);
        Date now = new Date();
        
        int n = (int) TimeUnit.MILLISECONDS.toMinutes(now.getTime() - past.getTime());
        if (n < 1) {
        	return "1 phút trước";
        }
        if (n < 60) {
        	return n + " phút trước";
        }
        if (n > 60) {
        	n = (int) TimeUnit.MILLISECONDS.toHours(now.getTime() - past.getTime());
        }
        if (n < 1) {
        	return "khoảng 1 giờ trước";
        }
        if (n < 24) {
        	return n + " giờ trước";
        } else {
        	n = (int) TimeUnit.MILLISECONDS.toDays(now.getTime() - past.getTime());
        }
        
        if (n < 1) {
        	return "khoảng 1 ngày trước";
        } else {
        	return n + " ngày trước";
        }
    }
    catch (Exception j){
        return TimeAgo;
    }

}

//	public static void main(String args[]) {
//		Ca_TimeAgo("2022-10-20 16:40:14.143");
//		System.out.println(Ca_TimeAgo("2022-10-20 16:40:14.143"));
//	}
}