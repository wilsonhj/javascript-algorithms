import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class BinarySearchRecursion {
  public static boolean binarySearchRecursive(int[] array, int x, int left, int right) {
    if (left > right) {
      return false;
    }
    int mid = left + ((right - left) / 2);
    if(array[mid] == x) { 
      return true;
    } else if (x < array[mid]){
      return binarySearchRecursive(array, x, left, mid - 1);
    } else {
      return binarySearchRecursive(array, x, mid + 1, right);
    }
  }

  public static boolean binarySearchRecursive(int[] array, int x) {
    return binarySearchRecursive(array, x, 0, array.length - 1);
  }
  public static void main(String[] args) {
    int[] arr = {1, 2, 3, 6, 4, 3};
    boolean bsr = binarySearchRecursive(arr, 3);
    System.out.println(bsr);
  }
}