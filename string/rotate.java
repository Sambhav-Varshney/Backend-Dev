// import java.util.Scanner;
// public class reverse
// {
//     public static void main(String[] args){
//         String str="Java is fun";
//         String[] words= str.split(" ");
//         int i=0;
//         int j=words.length-1;
//         while (j>i) {
//             String temp=words[i];
//             words[i]=words[j];
//             words[j]=temp;
//             i++;
//             j--;
//         }
//         System.out.println(String.join("",words));

//     }
    
// }

public class rotate {
    public static void main(String[] args ){
        String s1="ABCD";
        String s2="CDAB";
        
        if(s1.length()!=s2.length()){
            System.out.println(false);
            return;
        }
        String s3=s1+s2;
        System.out.println(s3.contains(s2));
    }
}
