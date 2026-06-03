import java.sql.*;

public class MoneyTransfer {

    public static void transfer(int from, int to, double amount) {

        try {
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/bankdb",
                    "root",
                    "password");

            con.setAutoCommit(false);

            PreparedStatement debit =
                    con.prepareStatement(
                            "UPDATE accounts SET balance=balance-? WHERE id=?");

            debit.setDouble(1, amount);
            debit.setInt(2, from);
            debit.executeUpdate();

            PreparedStatement credit =
                    con.prepareStatement(
                            "UPDATE accounts SET balance=balance+? WHERE id=?");

            credit.setDouble(1, amount);
            credit.setInt(2, to);
            credit.executeUpdate();

            con.commit();

            System.out.println("Transfer Successful");

        } catch (Exception e) {
            System.out.println("Transaction Failed");
        }
    }

    public static void main(String[] args) {
        transfer(1, 2, 500);
    }
}