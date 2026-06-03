import java.util.*;

public class LambdaSortDemo {
    public static void main(String[] args) {

        List<String> names = new ArrayList<>();

        names.add("David");
        names.add("Alex");
        names.add("John");
        names.add("Brian");

        Collections.sort(names, (a, b) -> a.compareTo(b));

        System.out.println("Sorted List:");
        System.out.println(names);
    }
}