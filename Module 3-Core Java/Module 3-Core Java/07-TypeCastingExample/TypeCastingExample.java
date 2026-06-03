public class TypeCastingExample 
{
    public static void main(String[] args) 
    {

        double d = 25.89;
        int i = (int) d;

        System.out.println("Double Value : " + d);
        System.out.println("Converted Int: " + i);

        int num = 100;
        double converted = num;

        System.out.println("Integer Value: " + num);
        System.out.println("Converted Double: " + converted);
    }
}