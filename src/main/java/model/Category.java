package model;

import java.util.List;

public class Category {

	private String categoryId;
	private String categoryName;
	
	private List<String> supercategories;

	public String getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public List<String> getSupercategories() {
		return supercategories;
	}

	public void setSupercategories(List<String> supercategories) {
		this.supercategories = supercategories;
	}

	
	
}
