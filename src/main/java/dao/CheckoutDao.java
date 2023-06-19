package dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import utillity.DBConnection;

public class CheckoutDao {
	
	public Integer saveAndcreateOrder(String address,String totalAmount,String orderId) throws SQLException {

		Date date = Date.valueOf("2023-06-18");
		PreparedStatement pst = null;
		ResultSet rs = null;
		Connection con = DBConnection.getConnection();
		pst = con.prepareStatement("INSERT INTO order (order_id,order_date, total_amount,shipping_address,payment_method,order_status) VALUES (?,?,?,?,?,?)");
		pst.setString(1,orderId);
		pst.setDate(2, date);
		pst.setString(3, totalAmount);
		pst.setString(4, address);
		pst.setString(5, "Credit Card");
		pst.setString(6, "Created");
		
		return pst.executeUpdate();
		
	}

}
