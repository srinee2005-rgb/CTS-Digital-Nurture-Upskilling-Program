public class PatternMatchingDemo { 
    public static void checkType(Object obj) { 
        // Null check to prevent NullPointerException
        if (obj == null) {
            System.out.println("Unknown type");
        } 
        // Java 17 standard pattern matching for instanceof
        else if (obj instanceof Integer i) { 
            System.out.println("Integer value: " + i); 
        } 
        else if (obj instanceof String s) { 
            System.out.println("String value: " + s); 
        } 
        else if (obj instanceof Double d) { 
            System.out.println("Double value: " + d); 
        } 
        else { 
            System.out.println("Unknown type"); 
        } 
    } 

    public static void main(String[] args) { 
        checkType(100); 
        checkType("Hello"); 
        checkType(25.5); 
    } 
}
