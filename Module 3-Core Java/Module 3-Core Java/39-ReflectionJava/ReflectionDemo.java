import java.lang.reflect.*;

class Student {

    public void display() {
        System.out.println("Display Method");
    }
}

public class ReflectionDemo {

    public static void main(String[] args) throws Exception {

        Class<?> c = Class.forName("Student");

        Method[] methods = c.getDeclaredMethods();

        for (Method m : methods) {
            System.out.println(m.getName());
        }

        Object obj = c.getDeclaredConstructor().newInstance();

        Method method = c.getMethod("display");

        method.invoke(obj);
    }
}