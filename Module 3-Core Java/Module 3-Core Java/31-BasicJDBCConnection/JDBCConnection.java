import java.sql.*;

public class JDBCConnection {

    public static void main(String[] args) {

        try {
            // Load JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Create Connection
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/studentdb",
                    "root",
                    "your_password");

            // Execute SELECT Query
            Statement stmt = con.createStatement();

            ResultSet rs = stmt.executeQuery("SELECT * FROM students");

            // Print Results
            while (rs.next()) {
                System.out.println(
                        rs.getInt("id") + " " +
                        rs.getString("name"));
            }

            // Close Connection
            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}