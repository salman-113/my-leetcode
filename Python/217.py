def containsDuplicate(nums):
    result = set()
    for check in nums:
        if check in result:
            return True
        result.add(check)
    return False

print(containsDuplicate([1, 2, 3, 4, 2]))  # True
print(containsDuplicate([1, 2, 3, 4])) 