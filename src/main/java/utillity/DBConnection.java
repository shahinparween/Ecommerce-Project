package utillity;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnection {
	
	
	public static Connection getConnection() {		
		Connection conn = null;
		
		String url = "jdbc:mysql://localhost:3306/"; 
        String dbName = "sys";
        String driver = "com.mysql.cj.jdbc.Driver";  
        String userName = "root";  
        String password = "root"; 
        
		
        try {
        	Class.forName(driver).newInstance();  
			conn = DriverManager  
			        .getConnection(url + dbName, userName, password);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}  

       return conn;

	}

}
