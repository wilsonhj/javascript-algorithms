class Solution: #BackTracking | Time O(2^n) | Space O(N)

	def __init__(self):
		self.valid_expressions = None
		self.min_removed = None
	
	def reset(self):
		self.valid_expressions = set()
		self.min_removed = float('inf')
	
	def remaining(self, string, idx, left_count, right_count, expr, rem_count):
		if idx == len(string): # end of string
			if left_count == right_count:
				if rem_count <= self.min_removed:
					possible_ans = "".join(expr)

					if rem_count < self.min_removed:
						self.valid_expressions = set()
						self.min_removed = rem_count
					
					self.valid_expressions.add(possible_ans)
		else:
			current_char = string[idx]
			if current_char != '(' and current_char != ')':
				expr.append(current_char)
				self.remaining(string, idx + 1, left_count, right_count, expr, rem_count)
				expr.pop()
			else:
				self.remaining(string, idx + 1, left_count, right_count, expr, rem_count + 1)
				expr.append(current_char)

				if string[idx] == '(':
					self.remaining(string, idx + 1, left_count + 1, right_count, expr, rem_count)
				elif right_count < left_count:
					self.remaining(string, idx + 1, left_count, right_count + 1, expr, rem_count)
				
				expr.pop()

	def removeInvalidParentheses(self, s: str) -> List[str]: 
		self.reset() # reset class level variables used for test cases
		self.remaining(s, 0, 0, 0, [], 0) # recursive call
		return list(self.valid_expressions)

	# def checkValidityExpr(left: int, right: int) -> Bool:
	# 	return left == right

if '__name__' == '__main__':
	sol = Solution.removeInvalidParentheses("()())()")
	print(sol)