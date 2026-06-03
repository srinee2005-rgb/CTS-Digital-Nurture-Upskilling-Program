

public class CallableDemo {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(2);

        Callable<String> task1 = () -> {
            Thread.sleep(1000);
            return "Task 1 completed";
        };

        Callable<String> task2 = () -> {
            Thread.sleep(1000);
            return "Task 2 completed";
        };

        Future<String> future1 = executor.submit(task1);
        Future<String> future2 = executor.submit(task2);

        System.out.println(future1.get());
        System.out.println(future2.get());

        executor.shutdown();
    }
}