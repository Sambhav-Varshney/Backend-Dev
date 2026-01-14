import java.util.Scanner;
public class reverse
{
    public static void main(String[] args){
        String str="Java is fun";
        String[] words= str.split(" ");
        int i=0;
        int j=words.length-1;
        while (j>i) {
            String temp=words[i];
            words[i]=words[j];
            words[j]=temp;
            i++;
            j--;
        }
        System.out.println(String.join("",words));
    }
    
}