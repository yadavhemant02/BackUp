package hashMap;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.LinkedList;
import java.util.Scanner;

public class Main {
	public static class HashMap<K, V> {
		private class HMNode {
			K key;
			V value;

			HMNode(K key, V value) {
				this.key = key;
				this.value = value;
			}
		}

		private int size; // n
		private LinkedList<HMNode>[] buckets; // N = buckets.length

		public HashMap() {
			initbuckets(4);
			size = 0;
		}

		private void initbuckets(int N) {
			buckets = new LinkedList[N];
			for (int bi = 0; bi < buckets.length; bi++) {
				buckets[bi] = new LinkedList<>();
			}
		}

		public void put(K key, V value) throws Exception {
			int bi = hashfn(key);
			int di = getIndexWithinBucket(key, bi);
			if (di != -1) {
				HMNode node = buckets[bi].get(di);
				node.value = value;
			} else {
				HMNode node = new HMNode(key, value);
				buckets[bi].add(node);
				size++;
			}
		}

		private int hashfn(K key) {
			int hc = key.hashCode();
			return Math.abs(hc) % buckets.length;
		}

		private int getIndexWithinBucket(K key, int bi) {
			int di = 0;
			for (HMNode node : buckets[bi]) {
				if (node.key.equals(key)) {
					return di;
				}
				di++;
			}
			return -1;
		}

		public V get(K key) throws Exception {
			int bi = hashfn(key);
			int di = getIndexWithinBucket(key, bi);
			if (di != -1) {
				HMNode node = buckets[bi].get(di);
				return node.value;
			} else {
				return null;
			}
		}

		public boolean containsKey(K key) {
			int bi = hashfn(key);
			int di = getIndexWithinBucket(key, bi);
			if (di != -1) {
				return true;
			} else {
				return false;
			}
		}

		public V remove(K key) throws Exception {
			int bi = hashfn(key);
			int di = getIndexWithinBucket(key, bi);
			if (di != -1) {
				HMNode node = buckets[bi].remove(di);
				size--;
				return node.value;
			} else {
				System.out.println("empty hashmap");
				return null;
			}
		}

		public ArrayList<K> keyset() throws Exception {
			ArrayList<K> keys = new ArrayList<>();
			for (int bi = 0; bi < buckets.length; bi++) {
				for (HMNode node : buckets[bi]) {
					keys.add(node.key);
				}
			}
			return keys;
		}

		public void size() {
			System.out.println("size :- " + size);
		}

		public void display() {
			System.out.println("Display Begins");
			for (int bi = 0; bi < buckets.length; bi++) {
				System.out.print("Bucket " + bi + " ");
				for (HMNode node : buckets[bi]) {
					System.out.print(node.key + " -> " + node.value + " ");
				}
				System.out.println(".");
			}
			System.out.println("Display Ends");
		}
	}

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		HashMap<String, Integer> map = new HashMap();
		Scanner sc = new Scanner(System.in);
		// String str = br.readLine();
		// String key = "hemant";
		// int val = 12;
		int mm;
		try {
			do {
				System.out.println(
						"press for put :- 1\n" + "size :- 2\n" + "get :- 3\n" + "constrainKey :- 4\n" + "remove :- 5");
				int qq = sc.nextInt();
				String key = " ";
				int val = 0;
				switch (qq) {
				case 1:
					// try {
					System.out.println("enter key for insert");
					key = sc.next();

					System.out.println("enter value for insert");
					val = sc.nextInt();

					map.put(key, val);

					break;
				case 2:
					map.size();
					break;
				case 3:
					System.out.println("enter key for checking value");
					key = sc.next();
					map.get(key);
					break;
				case 4:
					System.out.println("enter key for value appearence");
					key = sc.next();
					map.containsKey(key);
					break;
				case 5:
					System.out.println("enter key for delete");
					key = sc.next();
					map.remove(key);
					break;
				}
				System.out.println("if you try another function press :-1");
				mm = sc.nextInt();
			} while (mm == 1);
		} catch (InputMismatchException e) {
			System.out.println("please enter valid key and value");
		}
		map.display();

	}

}
