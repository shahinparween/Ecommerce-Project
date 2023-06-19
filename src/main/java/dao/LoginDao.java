package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import model.User;
import utillity.DBConnection;

public class LoginDao {

	public User getUser(String name, String pass) throws SQLException {

		PreparedStatement pst = null;
		ResultSet rs = null;
		User user = null;

		Connection con = DBConnection.getConnection();
		pst = con.prepareStatement("select username,name,password from users where username=? and password=?");
		pst.setString(1, name);
		pst.setString(2, pass);

		rs = pst.executeQuery();
		while(rs.next()) {
			user = new User(rs.getString("username"),rs.getString("name"),rs.getString("password"));
			break;
		}
		return user;
		
		
		
	}
	
	public Integer register(String name, String username,String pass) throws SQLException {
		
		Connection con = DBConnection.getConnection();
		String sql = "INSERT INTO users (name, username,password ) VALUES (?, ?,?)";
        PreparedStatement statement = con.prepareStatement(sql);
        
        // Set parameter values
        statement.setString(1, name);
        statement.setString(2, username);
        statement.setString(3, pass);

        // Execute the statement
        return statement.executeUpdate();
		
	}

}
