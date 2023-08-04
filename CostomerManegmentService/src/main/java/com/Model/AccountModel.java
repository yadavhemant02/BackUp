/**
 * 
 */
package com.Model;


public class AccountModel {
   
	private int id;
	private String accounttype;
	private String accountname;
	private String accountnumber;
	private int accountbalance;
	private String createat;
	
	public AccountModel(int id, String accounttype, String accountname, String accountnumber, int accountbalance,
			String createat) {
		super();
		this.id = id;
		this.accounttype = accounttype;
		this.accountname = accountname;
		this.accountnumber = accountnumber;
		this.accountbalance = accountbalance;
		this.createat = createat;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAccounttype() {
		return accounttype;
	}

	public void setAccounttype(String accounttype) {
		this.accounttype = accounttype;
	}

	public String getAccountname() {
		return accountname;
	}

	public void setAccountname(String accountname) {
		this.accountname = accountname;
	}

	public String getAccountnumber() {
		return accountnumber;
	}

	public void setAccountnumber(String accountnumber) {
		this.accountnumber = accountnumber;
	}

	public int getAccountbalance() {
		return accountbalance;
	}

	public void setAccountbalance(int accountbalance) {
		this.accountbalance = accountbalance;
	}

	public String getCreateat() {
		return createat;
	}

	public void setCreateat(String createat) {
		this.createat = createat;
	}

	@Override
	public String toString() {
		return "AccountModel [id=" + id + ", accounttype=" + accounttype + ", accountname=" + accountname
				+ ", accountnumber=" + accountnumber + ", accountbalance=" + accountbalance + ", createat=" + createat
				+ "]";
	}

	public AccountModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	
                                                                 
}
