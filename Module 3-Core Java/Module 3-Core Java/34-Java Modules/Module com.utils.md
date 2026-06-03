**Module: com.utils**





**module-info.java**





module com.utils {

&#x20;   exports com.utils;

}





**Utility.java**





package com.utils;



public class Utility {



&#x20;   public static void display() {

&#x20;       System.out.println("Utility Method");

&#x20;   }

}





**Module: com.greetings**





**module-info.java**





module com.greetings {

&#x20;   requires com.utils;

}





**Main.java**





package com.greetings;



import com.utils.Utility;



public class Main {



&#x20;   public static void main(String\[] args) {

&#x20;       Utility.display();

&#x20;   }

}

