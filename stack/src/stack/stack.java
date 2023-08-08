package stack;

import java.util.InputMismatchException;
import java.util.Scanner;

class stackImp {
	int n = 10, m;
	int top = -1;

	Scanner sc = new Scanner(System.in);
	int var[] = new int[n];

	void push() {
		int a = 0;
		if (top == (n - 1)) {
			System.out.println("overflow");
		} else {
			try {
				do {
					System.out.println("enter your data");
					a = sc.nextInt();
					top = top + 1;
					var[top] = a;
					System.out.println("add another account press 1");
					m = sc.nextInt();
				} while (m == 1);
			} catch (InputMismatchException e) {
				System.out.println("please enter a integer number");
			}
		}

	}

	void pop() {
		if (top == -1) {
			System.out.println("underflow");

		} else {
			System.out.println("last element deleted " + var[top]);
			top = top - 1;
			// return var[top+1];
		}
	}

	void peek() {
		if (top == -1) {
			System.out.println("underflow");
		} else {
			System.out.println(var[top]);
		}

	}

	void size() {
		int bb;
		bb = top + 1;
		System.out.println(bb);
	}

	void sort() {

		for (int i = top; i >= 0; i--) {
			int a = var[i];
			int bb = i - 1;
			while (bb >= 0) {
				if (var[bb] > var[i]) {
					int b = var[bb];
					var[bb] = var[i];
					var[i] = b;
				}
				bb--;
			}
		}
	}

	void display() {
		for (int i = top; i >= 0; i--) {
			System.out.println(var[i]);
		}
	}
}

public class stack {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		stackImp ll = new stackImp();
		// switch case
		Scanner sc = new Scanner(System.in);
		int mm;
		do {
			System.out.println(
					"press for ,\n" + "push :- 1\n" + "sort :- 2\n" + "pop :- 3\n" + "size :- 4\n" + "peek :- 5");
			int qq;
			qq = sc.nextInt();
			switch (qq) {
			case 1:
				ll.push();
				break;
			case 2:
				ll.sort();
				break;
			case 3:
				ll.pop();
				break;
			case 4:
				ll.size();
				break;
			case 5:
				ll.peek();
				break;
			// ll.display();
			}
			System.out.println("press 1 if try another function");
			mm = sc.nextInt();
		} while (mm == 1);
		ll.display();

	}

}
