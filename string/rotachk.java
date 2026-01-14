public class rotachk {
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
