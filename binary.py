def bins(n, bin=""):
    if n==0: return [bin]
    else: return bins(n-1,bin="0")+ bins(n-1,bin="1")
print(7)