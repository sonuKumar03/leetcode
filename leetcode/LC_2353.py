import heapq
from typing import List, Tuple, Dict

class FoodRatings:

    def __init__(self, foods: List[str], cuisines: List[str], ratings: List[int]):
        # Keep the original list format
        self.data: List[Tuple[int, List[str]]] = []
        n = len(foods)

        # Index maps for fast lookups
        self.food_to_idx: Dict[str, int] = {}
        self.food_to_rating: Dict[str, int] = {}
        self.food_to_cuisine: Dict[str, str] = {}
        self.cuisine_heaps: Dict[str, list] = {}

        for i in range(n):
            f, c, r = foods[i], cuisines[i], ratings[i]
            self.data.append((r, [f, c]))
            self.food_to_idx[f] = i
            self.food_to_rating[f] = r
            self.food_to_cuisine[f] = c
            if c not in self.cuisine_heaps:
                self.cuisine_heaps[c] = []
            # Push as (-rating, food) so that max rating + lexicographically smallest food is on top
            heapq.heappush(self.cuisine_heaps[c], (-r, f))

    def changeRating(self, food: str, newRating: int) -> None:
        # Update in self.data
        i = self.food_to_idx[food]
        _, [f, c] = self.data[i]
        self.data[i] = (newRating, [f, c])

        # Update truth maps
        self.food_to_rating[food] = newRating

        # Push new snapshot into cuisine heap (lazy deletion for old entries)
        heapq.heappush(self.cuisine_heaps[c], (-newRating, food))

    def highestRated(self, cuisine: str) -> str:
        h = self.cuisine_heaps[cuisine]
        while h:
            neg_r, f = h[0]
            cur_r = self.food_to_rating[f]
            cur_c = self.food_to_cuisine[f]
            if cur_r != -neg_r or cur_c != cuisine:
                # Stale entry, remove it
                heapq.heappop(h)
            else:
                return f
        return ""


# Example usage
foods = ["pizza", "pasta", "ramen", "sushi"]
cuisines = ["italian", "italian", "japanese", "japanese"]
ratings = [5, 7, 6, 9]

fr = FoodRatings(foods, cuisines, ratings)
print(fr.highestRated("italian"))   # pasta
print(fr.highestRated("japanese"))  # sushi
fr.changeRating("pizza", 10)
print(fr.highestRated("italian"))   # pizza
fr.changeRating("sushi", 6)
print(fr.highestRated("japanese"))  # ramen