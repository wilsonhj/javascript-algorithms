import collections

class Solution:
	def findItinerary(self, tickets: List[List[str]]) -> List[str]:
		targets = collections.defaultdict(list)
		for a, b in sorted(tickets)[::-1]:
			targets[a] += b,
		route = []
		def visit(airport):
			while targets[airport]:
				visit(targets[airport].pop())
			route.append(airport)
		visit('JFK')
		return route[::-1]

def main():
	print("x")
	Solution.findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]])

if __name__ == "main":
	main()
	Solution.findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]])
