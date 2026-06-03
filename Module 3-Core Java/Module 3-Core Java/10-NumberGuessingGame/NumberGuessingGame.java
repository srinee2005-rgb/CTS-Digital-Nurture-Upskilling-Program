import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame 
{
    public static void main(String[] args) 
    {

        Random random = new Random();
        Scanner sc = new Scanner(System.in);

        int target = random.nextInt(100) + 1;
        int guess;

        do {
            System.out.print("Guess a number (1-100): ");
            guess = sc.nextInt();

            if(guess < target)
                System.out.println("Too Low!");
            else if(guess > target)
                System.out.println("Too High!");
            else
                System.out.println("Correct! You guessed it.");
        }
        while(guess != target);

        sc.close();
    }
}