package com.Model;
import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class transectionDetailModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String transactionid;
	private String accountname;
	private String accounttype;
	private int amount;
	private String source;
	private String status;
	private String createat;
	private int accountid;
	public transectionDetailModel(int id, String transactionid, String accountname, String accounttype, int amount,
			String source, String status, String createat, int accountid) {
		super();
		this.id = id;
		this.transactionid = transactionid;
		this.accountname = accountname;
		this.accounttype = accounttype;
		this.amount = amount;
		this.source = source;
		this.status = status;
		this.createat = createat;
		this.accountid = accountid;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTransactionid() {
		return transactionid;
	}
	public void setTransactionid(String transactionid) {
		this.transactionid = transactionid;
	}
	public String getAccountname() {
		return accountname;
	}
	public void setAccountname(String accountname) {
		this.accountname = accountname;
	}
	public String getAccounttype() {
		return accounttype;
	}
	public void setAccounttype(String accounttype) {
		this.accounttype = accounttype;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getCreateat() {
		return createat;
	}
	public void setCreateat(String createat) {
		this.createat = createat;
	}
	public int getAccountid() {
		return accountid;
	}
	public void setAccountid(int accountid) {
		this.accountid = accountid;
	}
	@Override
	public String toString() {
		return "transectionDetailModel [id=" + id + ", transactionid=" + transactionid + ", accountname=" + accountname
				+ ", accounttype=" + accounttype + ", amount=" + amount + ", source=" + source + ", status=" + status
				+ ", createat=" + createat + ", accountid=" + accountid + "]";
	}
	public transectionDetailModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	

}
