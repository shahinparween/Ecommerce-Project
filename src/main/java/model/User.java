package model;

public class User {
	
	private String username;
	private String name;
	private String passowrd;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassowrd() {
		return passowrd;
	}
	public void setPassowrd(String passowrd) {
		this.passowrd = passowrd;
	}
	public User(String username, String name, String passowrd) {
		super();
		this.username = username;
		this.name = name;
		this.passowrd = passowrd;
	}
	
}
