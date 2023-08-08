package linkedList;
import java.util.Scanner;
import java.util.Iterator;
import java.util.InputMismatchException;
class creationList{
	public class Node {
		int data;
		Node next;
		Node(int Data){
			this.data = Data;
			this.next = null;
		}
		//@Override
		//public Iterator<Node> iterator(){
		//	Iterator<Node> iterator = new StackIterator();
		//	return iterator;
		//}
		//public class StackIterator implements Iterator<Node>{
		//	Node current= getTop();
			
		//}
		
	}
	Node head = null;
	void creation() {
		Scanner sc = new Scanner(System.in);
		int data = 0,n,m,p;
		//boolean e;
		try {
		do {
		
		       System.out.println("enter you data");
		       data = sc.nextInt();
			   
					
		  Node new_node = new Node(data);
		//System.out.println("");
		if(head == null) {
			head = new_node;
		}
		else {
			System.out.print("insert at bigning press 1, insert at end press 2, insert at position press 3");
			m = sc.nextInt();
			switch(m) {
			case 1:
			      new_node.next = head;
			      head = new_node;
			      break;
			case 2:
				  Node tem = head;
				  while (tem.next != null) {
					  tem = tem.next;
				  }
				  tem.next = new_node;
				  break;
			case 3:
				  System.out.println("enter position");
				  Node temp = head;
				  p = sc.nextInt();
				  for(int i=0;i<(p-1);i++) {
					  temp = temp.next;
				  }
				  new_node.next = temp.next;
				  temp.next = new_node;
				  break;
				  }
		    }
	
	   
		System.out.print("if you want store another data please press 1");
		n = sc.nextInt();
	    }
		
		while(n == 1);
		}
		 catch(InputMismatchException e) {
				System.out.println("please enter integer data");
		       	}
		
		
	}  
	void Deletion() {
		int n,m,p;
		Scanner sc = new Scanner(System.in);
		if (head == null) {
			System.out.println("empty list");
		}
		else {
			try {
		do {

			System.out.println("delete at begining press 1, delete at position press 2, delete at end press 3");
		    m = sc.nextInt();
		    switch(m) {
		    case 1:
		    	Node temp = head;
		    	temp = temp.next;
		    	head = temp;
		    	break;
		    case 2:
		    	System.out.println("enter position");
		    	p = sc.nextInt();
		    	Node tem = head;
		    	int i = 0;
		    	while(tem.next != null) {
		    		tem = tem.next;
		    		i++;
		            if (i>=p) {
		            	break;
		            }
		            tem.next = tem.next.next;
		    	}
		    case 3:
		    	Node var = head;
		    	Node pre = head.next;
		    	while (pre.next != null) {
		    		var = pre;
		    		pre = pre.next;
		    	}
		    	var.next = null;
		    	
		    }
		 System.out.println("delete another data press 1");    
		 n = sc.nextInt();    	
		}
		while(n==1);
			}
			catch(InputMismatchException e) {
				System.out.println("please enter valid key");
			}
		}		
	}
	void center() {
		if (head == null) {
			System.out.println("empty linkedlist");
		}
		else {
		Node slow = head;
		Node fast = head;
		while (fast != null && fast.next != null) {
			slow = slow.next;
			fast = fast.next.next;
		}
		System.out.println(slow.data);
	}
	}
	void reverse() {
		if (head == null) {
			System.out.println("empty linked list");
		}
		else {
		Node bb;
		Node pre = head;
		Node var = null;
		while(pre != null) {
			bb = pre.next;
			pre.next = var;
			var = pre;
			pre = bb;
		}
		head = var;
	}
	}
	void sort() {
		Node current = head;
		Node index = null;
		int temp;
		if (head == null) {
			System.out.println("empty linkedlist");
		}
		else {
			while (current != null) {
				index = current;
				while(index != null) {
					if (current.data > index.data) {
						temp = current.data;
						current.data = index.data;
						index.data = temp;
					}
					index = index.next;
				}
				current = current.next;
			}
		}
	}
	void size() {
		Node temp = head;
		
		int bb = 0;
		if (head == null) {
			System.out.println("empty list");
		}
		else {
		while (temp != null){
			temp = temp.next;
			bb++;
		}
		System.out.println(bb);
		}
	}
	void traversal() {
		Node temp = head;
		if(temp == null) {
		    return ;
		}
		else {
			while(temp != null) {
				System.out.println(temp.data);
				temp = temp.next;
			}
		}
	}
}

public class linkedlist {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		creationList ll = new creationList();
		Scanner sc = new Scanner(System.in);
		int mm = 0;
		// ....switch case
		do {
			System.out.println("press for ,\n"
					+ "creation : 1 \n"
					+ "size : 2 \n"
					+ "sort : 3 \n"
					+ "reverse : 4 \n"
					+ "center : 5 \n"
					+ "delete : 6 \n");
			int qq = sc.nextInt();
			switch(qq) {
			     case 1:
		                   ll.creation();
		                   break;
			     case 2:        
	                    	ll.size();
	                    	break;
			     case 3:
	                     	ll.sort();
	                     	break;
			     case 4:
	                    	ll.reverse();
	          
	                    	break;
			     case 5:
	                      	ll.center();
	                      	break;
			     case 6:
	                     	ll.Deletion();
	                     	break;
			} 	
		//ll.traversal();
		System.out.println("press 1 if try another function");
		try {
		mm = sc.nextInt();
		}
		catch (InputMismatchException e){
			System.out.println("take only integer number");
		}
		}
		while(mm == 1);
		ll.traversal();
	}

}
