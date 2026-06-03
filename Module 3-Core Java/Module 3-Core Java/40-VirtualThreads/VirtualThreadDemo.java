public class VirtualThreadDemo {

    public static void main(String[] args)
            throws Exception {

        long start = System.currentTimeMillis();

        for (int i = 1; i <= 100000; i++) {

            int num = i;

            Thread.startVirtualThread(() -> {
                System.out.println(
                        "Virtual Thread " + num);
            });
        }

        Thread.sleep(3000);

        long end = System.currentTimeMillis();

        System.out.println("Time: "
                + (end - start) + " ms");
    }
}