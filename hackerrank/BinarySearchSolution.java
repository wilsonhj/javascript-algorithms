import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class BinarySearchSolution {
  public static boolean binarySearchIterative(int[] array, int x) {
    int left = 0;
    int right = array.length - 1;
    
    while (left <= right ){
      int mid = left + ((right - left) / 2);
      if (array[mid] == x) {
        return true;
      }
      else if (x < array[mid]){
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return false; 
  }
  public static void main(String[] args) {
    int[] array = {1, 2, 3, 6, 4, 3};
    boolean bs = binarySearchIterative(array, -9);
    System.out.println(bs);
  }
}