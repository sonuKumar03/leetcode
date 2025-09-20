import heapq
from typing import List, Dict, Tuple

class TaskManager:
    def __init__(self, tasks: List[List[int]]):
        # taskId -> (userId, priority)  ⬅️ single source of truth
        self.cur: Dict[int, Tuple[int, int]] = {}
        # Max-heap via negatives: (-priority, -taskId)
        self.pq: List[Tuple[int, int]] = []

        for userId, taskId, priority in tasks:
            self.cur[taskId] = (userId, priority)
            heapq.heappush(self.pq, (-priority, -taskId))

    def add(self, userId: int, taskId: int, priority: int) -> None:
        # taskId is guaranteed to be new
        self.cur[taskId] = (userId, priority)
        heapq.heappush(self.pq, (-priority, -taskId))

    def edit(self, taskId: int, newPriority: int) -> None:
        # taskId exists
        userId, _ = self.cur[taskId]
        self.cur[taskId] = (userId, newPriority)
        # push new snapshot; old heap entries will be lazily ignored
        heapq.heappush(self.pq, (-newPriority, -taskId))

    def rmv(self, taskId: int) -> None:
        # taskId exists
        self.cur.pop(taskId, None)  # lazy deletion from heap

    def execTop(self) -> int:
        # Pop until top matches current truth; remove and return its userId
        while self.pq:
            neg_p, neg_tid = self.pq[0]
            taskId = -neg_tid
            priority = -neg_p
            info = self.cur.get(taskId)
            if info is None:
                heapq.heappop(self.pq)  # removed task -> stale entry
                continue
            userId, cur_priority = info
            if cur_priority != priority:
                heapq.heappop(self.pq)  # outdated priority -> stale
                continue
            # valid top
            heapq.heappop(self.pq)
            del self.cur[taskId]
            return userId
        return -1