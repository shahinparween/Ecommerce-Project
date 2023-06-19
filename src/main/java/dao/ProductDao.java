package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import model.Product;
import utillity.DBConnection;

public class ProductDao {
	
	public List<Product> getProductDetails(String category) throws SQLException {

		PreparedStatement pst = null;
		ResultSet rs = null;
		List<Product> productlist = new ArrayList<>();
		Connection con = DBConnection.getConnection();
		pst = con.prepareStatement("select productid,title,description,image,category,msrp_price,list_price from products where category=?");
		pst.setString(1, category);

		rs = pst.executeQuery();
		while(rs.next()) {
			
			Product product = new Product();
			product.setProductId(rs.getString("productid"));
			product.setTitle(rs.getString("title"));
			product.setDescription(rs.getString("description"));
			product.setCategory(rs.getString("category"));
			product.setImage(rs.getString("image"));
			product.setMsrpPrice(rs.getDouble("msrp_price"));
			product.setListProce(rs.getDouble("list_price"));
			productlist.add(product);
		}
		return productlist;
	}

}
