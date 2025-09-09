# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        pass
        
    def _euler_tour(self,root:TreeNode):
        euler = []
        depth = []
        first = {}

        def dfs(node:TreeNode,d:int):
            if not node:
                return 
            
            if not node in first:
                first[node] = len(euler)
            euler.append(node)
            depth.append(d)

            if node.left:
                dfs(node.left,d+1)
                euler.append(node)
                depth.append(d)
            
            if node.right:
                dfs(node.right,d+1)
                euler.append(node)
                depth.append(d)

        dfs(root,0)
        return euler,depth,first

sol = Solution()
sol.lowestCommonAncestor(
    root = [3,5,1,6,2,0,8,None,None,7,4], p = 5, q = 1
)
