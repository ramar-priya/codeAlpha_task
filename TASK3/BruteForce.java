import java.util.Scanner;
class Bruteforce {
 char [] input;
 int key;
    
     void bruteforce()
 {
     Scanner sc = new Scanner(System.in);
     System.out.print("Enter the String : ");
     String ip = sc.nextLine();
     input = ip.toCharArray();
     for(key=1;key<27;key++)
     {
         for(int i=0;i<input.length;i++)
         {
             if(input[i] == ' ')
                 continue;
             else
             {
                 if(input[i] >='A' && input[i] <='Z')
                 {
                     input[i] = (char) (input[i] - key);
                     if(input[i] < 'A')
                     {
                         input[i] = (char) (input[i] + 26);
                     }
                 }
                 else
                 {
                     input[i] = (char) (input[i] - key);
                     if(input[i] < 'a')
                     {
                         input[i] = (char) (input[i] + 26);
                     }
                 }
             }
         }
         System.out.println("Key = " + key + " Decrypted String : " + String.valueOf(input));
         input = ip.toCharArray();
     }
 }
    
 public static void main(String[] args) {
     Scanner sc = new Scanner(System.in);
     int c;
     do
     {
         System.out.println("Press 1 to bruteforce");
         System.out.println("Press 2 to exit");

         c = sc.nextInt();
         switch(c)
         {
             case 1 : System.out.println("Bruteforcing!!! please wait");
             new Bruteforce().bruteforce();  
             break;
             case 2 : break;
         }
     }while(c!=2);
 }
}