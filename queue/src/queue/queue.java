package queue;

import java.util.InputMismatchException;
import java.util.Scanner;

public class queue {
	int size = 0;
	int f = -1;
	int r = -1;
	int n = 10;
	Scanner sc = new Scanner(System.in);

	int q[] = new int[n];

	void enqueue() {
		int i = 0;
		if (r == (n - 1)) {
			System.out.println("overflow");
		} else {
			int nn;
			// int i;
			try {
				do {
					try {
						System.out.println("enter the data");
						i = sc.nextInt();
					} catch (InputMismatchException e) {
						System.out.println("please enter integer number");
					}
					if (f == -1 && r == -1) {
						f = 0;
						r = 0;
						q[r] = i;
					} else {
						r = r + 1;
						q[r] = i;
					}
					size++;
					System.out.println("insert another data press :- 1");
					nn = sc.nextInt();
				} while (nn == 1);
			} catch (InputMismatchException e) {
				System.out.println("plese enter integer data");
			}
		}
	}

	void sort() {
		for (int i = f; i < r; i++) {
			int a = q[i];
			int b = f + 1;
			while (b < r) {
				if (q[i] > q[b]) {
					int var = q[b];
					q[b] = q[i];
					q[i] = var;
				}
				b++;
			}
		}
	}

	void size() {
		System.out.println("size of queue :-" + size);
		// return r;
	}

	void dequeue() {
		if (f == -1 && r == -1) {
			System.out.println("under flow");
		} else {
			int tt;
			do {
				f = f + 1;
				System.out.println("delete anoter data");
				tt = sc.nextInt();
			} while (tt == 1);
			size--;
		}

	}

	void display() {
		System.out.println("item are :");
		for (int i = f; i <= r; i++) {
			System.out.println(q[i]);
		}
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		queue var = new queue();
		Scanner sc = new Scanner(System.in);
		int mm;
		do {
			System.out.println("press for enqueue :- 1\n" + "deueue :- 2\n" + "sort :- 3\n" + "size :- 4\n");
			int qq = sc.nextInt();
			switch (qq) {
			case 1:
				var.enqueue();
				break;
			case 2:
				var.dequeue();
				break;
			case 3:
				var.sort();
				break;
			case 4:
				var.size();
				break;
			}
			// var.display();
			System.out.println("if want try another function press :- 1");
			mm = sc.nextInt();
		}

		while (mm == 1);
		var.display();

	}
}
