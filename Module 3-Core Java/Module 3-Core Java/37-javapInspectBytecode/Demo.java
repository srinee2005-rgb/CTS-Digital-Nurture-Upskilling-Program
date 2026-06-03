public class Demo {

    public void show() {
        System.out.println("Hello");
    }

    public static void main(String[] args) {
        new Demo().show();
    }
}

Commands

javac Demo.java

javap -c Demo


Sample Output


public void show();
Code:
0: getstatic
3: ldc
5: invokevirtual
8: return