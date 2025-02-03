import java.util.PriorityQueue;

/**
 * LC - https://leetcode.com/problems/eliminate-maximum-number-of-monsters/description/?envType=problem-list-v2&envId=greedy
 * 2025-02-03
 */
class Solution {
    public int eliminateMaximum(int[] dist, int[] speed) {
        PriorityQueue<Double> heap = new PriorityQueue<>();
        for(int i = 0;i<dist.length;i++){
            heap.add( (double) dist[i]/ speed[i]);
        }
        int ans = 0;

        while (!heap.isEmpty()) {
            double e = heap.poll();
            if(e <=ans){
                break;
            }
        }
        return ans;
    }
}

public class LC_1921{
    public static void main(String[] args) {
        Solution s = new Solution();
        int[] dist = {1,3,4};
        int [] speed = {1,1,1};
        int ans = s.eliminateMaximum(dist,speed);
        System.err.println(ans);
    }
}