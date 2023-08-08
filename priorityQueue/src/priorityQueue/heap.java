package priorityQueue;

import java.util.Scanner;

class QueueFullException extends RuntimeException {

	public QueueFullException() {
		super();
	}

	public QueueFullException(String message) {
		super(message);
	}

}

class QueueEmptyException extends RuntimeException {

	public QueueEmptyException() {
		super();
	}

	public QueueEmptyException(String message) {
		super(message);
	}

}

class PriorityQueue {

	private int[] prioQueueAr;
	private int size;// Size of Queue
	private int number; // holds number of elements in Priority Queue, initialized with 0 by default

	public PriorityQueue(int size) {
		this.size = size;
		prioQueueAr = new int[this.size];
		number = 0;
	}

	public void insert(int value) {
		int i;
		if (isFull()) {
			throw new QueueFullException("Cannot insert " + value + ", Queue is full");
		}
		if (number == 0)
			prioQueueAr[number++] = value;
		else {
			for (i = number - 1; i >= 0; i--) {
				if (value > prioQueueAr[i])
					prioQueueAr[i + 1] = prioQueueAr[i];
				else
					break;
			}
			prioQueueAr[++i] = value;
			number++;
		}
	}

	public void peek() {
		System.out.println("Highest Priority :-" + prioQueueAr[number - 1]);
	}

	public boolean constrain(int a) {
		for (int i = number - 1; i >= 0; i--) {
			if (a == prioQueueAr[i]) {
				return true;
			}
		}
		return false;
	}

	public void remove() {
		if (isEmpty()) {
			// throw new QueueEmptyException("Queue is empty");
			System.out.println("empty");

		} else {
			System.out.println(prioQueueAr[--number]);
		}
	}

	public int center() {
		int a = number / 2;
		return prioQueueAr[a];
	}

	public boolean isFull() {
		return (number == size);
	}

	public boolean isEmpty() {
		return (number == 0);
	}

	public void display() {
		// int a = this.size;
		for (int i = 0; i < number; i++) {
			System.out.println(prioQueueAr[i]);
		}
		// System.out.println(a);
	}

}

public class heap {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int n;
		System.out.println("set the ArraySize");
		n = sc.nextInt();
		PriorityQueue ll = new PriorityQueue(10);
		int mm;
		do {
			System.out.println("press for,\n" + "insert :- 1\n" + "peek :-2\n" + "constrain :- 3\n" + "remove :- 4\n"
					+ "center := 5");
			int qq = sc.nextInt();
			switch (qq) {
			case 1:
				int ww;
				do {

					System.out.println("enetr a value for insert");
					int cc = sc.nextInt();

					ll.insert(cc);
					System.out.println(" for add another data press :- 1");
					ww = sc.nextInt();
				} while (ww == 1);

				break;
			case 2:
				ll.peek();
				break;
			case 3:
				System.out.println("enter data for checking");
				int val = sc.nextInt();
				ll.constrain(val);
				break;
			case 4:
				int tt;
				do {
					ll.remove();
					System.out.println("remove another data press :- 1");
					tt = sc.nextInt();
				} while (tt == 1);
				break;
			case 5:
				ll.center();
				break;
			// ll.display();
			}
			System.out.println("if you want to try another function press :- 1");
			mm = sc.nextInt();

		} while (mm == 1);
		ll.display();

	}

}
