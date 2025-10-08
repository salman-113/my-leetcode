prices = [7, 1, 5, 3, 6, 4]

min_price = float('inf')
max_price = 0

for price in prices:
    if price < min_price:
        min_price = price
    
    profit = price - min_price
    if profit > max_price:
        max_price = profit

print(max_price)