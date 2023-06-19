package model;

public class Product {
	
	private String productId;
	private String category;
	private String description;
	private String image;
	private String title;
	private Double msrpPrice;
	private Double listProce;
	private int qty;
	
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public String getProductId() {
		return productId;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Double getMsrpPrice() {
		return msrpPrice;
	}
	public void setMsrpPrice(Double msrpPrice) {
		this.msrpPrice = msrpPrice;
	}
	public Double getListProce() {
		return listProce;
	}
	public void setListProce(Double listProce) {
		this.listProce = listProce;
	}
	
	

}
