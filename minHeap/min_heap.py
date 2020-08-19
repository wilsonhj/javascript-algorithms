class MinHeap:
	def __init__(self, array):
		self.heap = self.buildHeap(array)
	
	def buildHeap(self, array):
		firstParentIdx = (len(array) - 2) // 2
		for currentIdx in reversed(range(firstParentIdx)):
			self.siftDown(currentIdx, len(array) - 1, array)
		return array

	def siftUp(self, currentIdx, heap):
		parentIdx = (currentIdx - 1) // 2 # rounds down
		while currentIdx > 0 and heap[currentIdx] < heap[parentIdx]: # max heap: >
			self.swap(currentIdx, parentIdx, heap)
			currentIdx = parentIdx
			parentIdx = (currentIdx - 1) // 2

	def siftDown(self, currentIdx, endIdx, heap):
		childOneIdx = currentIdx * 2 + 1
		while childOneIdx <= endIdx:
			childTwoIdx = currentIdx * 2 + 2 if currentIdx * 2 + 2 <= endIdx else - 1
			if childTwoIdx != -1 and heap[childTwoIdx] < heap[childOneIdx]:
				idxToSwap = childTwoIdx
			else:
				idxToSwap = childOneIdx
			if heap[idxToSwap] < heap[currentIdx]: # max Heap: >
				self.swap(currentIdx, idxToSwap, heap)
				currentIdx = idxToSwap
				childOneIdx = currentIdx * 2 + 1
			else:
				break

	def peek(self):
		return self.heap[0]

	def remove(self):
		self.swap(0, len(self.heap) - 1, self.heap)
		valueToRemove = self.heap.pop()
		self.siftDown(0, len(self.heap) - 1, self.heap)
		return valueToRemove

	def insert(self, value):
		self.heap.append(value)
		self.siftUp(len(self.heap) - 1, self.heap)
	
	def swap(self, i, j, heap):
		heap[i], heap[j] = heap[j], heap[i]
	
	def __toString__(self):
		print(self.heap)

#heap = MinHeap([6,7,12,10,15,17])
#print(heap.peek())


if __name__ == '__main__':
	heap = MinHeap([6,7,12,10,15,17,5])
	heap.__toString__()