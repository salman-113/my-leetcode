def isAnagram(s: str, t: str) -> bool:
        if sorted(s) == sorted(t):
            return True
        else:
            return False
    
s = "apple"
t = "lppae"

print(isAnagram(s, t))