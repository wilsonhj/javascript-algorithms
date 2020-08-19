class MaxSubArrayOptimized:
	def __init__(self, prices):
		self.prices = prices
		self.global_max, local_max = 0, 0
		self.sub_array = []
		for i in range(len(self.prices)):
			if i == 0:
				local_max = self.prices[0]
			else:
				local_max = max(self.prices[i], local_max + self.prices[i])
				
			self.global_max = max(self.global_max, local_max)
	
	def max_sub_array_sum(self):
		return self.global_max
	
	def max_sub_array(self):
		best_sum = float('-inf')
		best_start = best_end = 0
		current_sum = 0
		for current_end, x in enumerate(self.prices):
			if current_sum <= 0:
				current_start = current_end
				current_sum = x
			else:
				current_sum += x

			if current_sum > best_sum:
				best_sum = current_sum
				best_start = current_start
				best_end = current_end + 1
		return self.prices[best_start: best_end]


msa = MaxSubArrayOptimized([5,-4,8,-10,-2,4,-3,2,7,-8,3,-5,3])
# print(msa.max_sub_array_sum())
print(msa.max_sub_array())