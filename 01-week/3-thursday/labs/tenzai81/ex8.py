total = float(input("Please provide the total amount for you bill. "))
print('How was the level of service?')
service = input('Please select good, ok, or bad  ')
check = input('Split how many ways? ')
if service == "good": 
    tips= (total * .2)
    total_bill = tips + total
    check = 0
    while check <0:  
        split = (total_bill)/2
        
    print(f"Amount per person: {split} ")