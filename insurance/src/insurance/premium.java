package insurance;
import java.util.InputMismatchException;
import java.util.Scanner;


class InvalidInput extends Exception{
	private static final long serialversionUID = 1L;
	public InvalidInput(String type) {
		super(type);
	}
}
public class premium {
	static String [] Type = {"hatchback","sedan","SUV"};
	static String [] Insurance = new String[] {"basic","premium"};
	static void valid(String type) throws InvalidInput{
		if (type.equalsIgnoreCase(Type[0]) || type.equalsIgnoreCase(Type[1]) || type.equalsIgnoreCase(Type[0])){
	     }
	    else if (type.equalsIgnoreCase(Insurance[0]) || type.equalsIgnoreCase(Insurance[1])) {
		
	     }
	    else {
	    	throw new InvalidInput("Not valid");
	    	}
	    }
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		char ch = 'Y';
		do {
		//System.out.println(type[0]);
		Scanner sc = new Scanner(System.in);
		
		//user output
		
		System.out.println("Car Model");
		String carModel = sc.next();
		System.out.println("Car type");
		String carType = sc.next();
		carType = carType.toLowerCase();
		double carCostPrice = 0;
		try {
			System.out.println("Car Cost Price");
			carCostPrice = sc.nextDouble();
			if (carCostPrice <= 0) {
				System.out.println("price can not be zero and negative");
			}
		} catch (InputMismatchException e) {
		
			System.out.println("please enter valid price");
		}
		try {
			valid(carType);
		}
		catch(Exception e) {
			System.out.println("please type valid car type");
		}
		System.out.println("Insurance Type");
		String insuranceType = sc.next();
		insuranceType = insuranceType.toLowerCase();
		try {
			valid(insuranceType);
		}
		catch(Exception e) {
			System.out.println("please type valite Insurance type");
		}
		double premium = 0.0d ;
		//System.out.println(car_cost_price);
		//System.out.println(type[0].getClass().getSimpleName());

		     if (carType .equals (Type[0])) {
		     	premium = 0.05 * carCostPrice;
		    	//premium = 23*0.8;
			    System.out.println(premium);
	       	}
		    else if (carType .equals (Type[1])) {
		    	premium = 0.08 * carCostPrice;
		    }
		    else if (carType .equals (Type[2])) {
			    premium = 0.1 * carCostPrice;
			    System.out.println(premium);
		    }
		    else {
		    	System.out.println("nhi");
	    	}
		//System.out.println(premium);
		
		
		    if (insuranceType .equals(Insurance[1])) {
		    	double var;
			    var = (premium * 20)/100;
			    premium = premium + var ;
		    
		}
		 System.out.println("Car Model : " + carModel + "\nPrice : " +
		carCostPrice+"\nTotall Insurance to be paid : " +premium);
		 System.out.println("do you want to more detail (y/n): ");
		 ch = sc.next().charAt(0);
		}
		while(ch == 'Y' || ch == 'y');
		

	}

}
